document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const recordJourney = document.querySelector('.record-journey');
    const recordSlides = recordJourney ? [...recordJourney.querySelectorAll('[data-record]')] : [];

    if (recordJourney && recordSlides.length > 1 && !prefersReducedMotion.matches) {
        recordJourney.style.setProperty('--record-count', recordSlides.length);
        recordJourney.classList.add('is-enhanced');

        let recordFrameRequested = false;
        let recordAnimationRunning = false;
        let wheelDelta = 0;
        let wheelDirection = 0;
        let touchStartY = null;
        let touchGestureConsumed = false;

        function getRecordProgress() {
            const scrollDistance = recordJourney.offsetHeight - window.innerHeight;
            if (scrollDistance <= 0) {
                return 0;
            }

            const lastIndex = recordSlides.length - 1;
            const rawProgress = Math.min(lastIndex, Math.max(0, -recordJourney.getBoundingClientRect().top / scrollDistance * lastIndex));
            if (rawProgress >= lastIndex) {
                return lastIndex;
            }

            const cycleIndex = Math.floor(rawProgress);
            const cycleProgress = rawProgress - cycleIndex;
            const hold = 0.35;
            const transitionProgress = Math.min(1, Math.max(0, (cycleProgress - hold) / (1 - 2 * hold)));
            return cycleIndex + transitionProgress;
        }

        function renderRecordJourney(progress) {
            const activeIndex = Math.round(progress);
            recordSlides.forEach((slide, index) => {
                const offset = progress - index;
                const distance = Math.min(1, Math.abs(offset));
                const opacity = Math.max(0, 1 - Math.abs(offset));
                const x = Math.max(-120, Math.min(120, offset * 120));
                const rotation = x / 120 * 270;
                const copyClip = offset <= 0 ? 0 : Math.min(100, Math.max(0, (offset - 0.22) / 0.78 * 100));
                const copyOpacity = offset <= 0
                    ? opacity
                    : Math.min(opacity, Math.max(0, (1 - offset) / 0.28));
                const copy = slide.querySelector('.record-copy');
                const vinyl = slide.querySelector('.vinyl-link');

                slide.style.opacity = opacity;
                slide.style.zIndex = offset >= 0 ? '2' : '1';
                slide.style.pointerEvents = index === activeIndex ? 'auto' : 'none';
                slide.inert = index !== activeIndex;
                slide.setAttribute('aria-hidden', String(index !== activeIndex));
                slide.style.setProperty('--record-scale', String(1 - distance * 0.1));
                if (copy) {
                    copy.style.setProperty('--copy-clip', `${copyClip}%`);
                    copy.style.setProperty('--copy-opacity', String(copyOpacity));
                }
                if (vinyl) {
                    vinyl.style.setProperty('--record-x', `${x}vw`);
                    vinyl.style.setProperty('--record-spin', `${rotation}deg`);
                }
            });

            const progressBar = recordJourney.querySelector('.record-progress');
            progressBar?.style.setProperty('--record-progress', String(progress / (recordSlides.length - 1)));
        }

        function setRecordScrollPosition(progress) {
            const scrollDistance = recordJourney.offsetHeight - window.innerHeight;
            const journeyTop = recordJourney.getBoundingClientRect().top + window.scrollY;
            const previousScrollBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = 'auto';
            window.scrollTo(0, journeyTop + scrollDistance * progress / (recordSlides.length - 1));
            document.documentElement.style.scrollBehavior = previousScrollBehavior;
        }

        function alignRecordToNearestStop(progress) {
            const nearestStop = Math.min(recordSlides.length - 1, Math.max(0, Math.round(progress)));
            renderRecordJourney(nearestStop);
            setRecordScrollPosition(nearestStop);
            wheelDelta = 0;
            wheelDirection = 0;
        }

        function startRecordTransition(direction) {
            if (recordAnimationRunning) {
                return;
            }

            const startProgress = getRecordProgress();
            const nearestStop = Math.round(startProgress);
            const targetProgress = Math.min(
                recordSlides.length - 1,
                Math.max(
                    0,
                    Math.abs(startProgress - nearestStop) < 0.02
                        ? nearestStop + direction
                        : direction > 0
                            ? Math.ceil(startProgress)
                            : Math.floor(startProgress)
                )
            );
            if (targetProgress === startProgress) {
                return;
            }

            recordAnimationRunning = true;
            const startTime = performance.now();
            const duration = 933;

            function animateRecord(timestamp) {
                const progress = Math.min(1, (timestamp - startTime) / duration);
                const easedProgress = progress * progress * (3 - 2 * progress);
                renderRecordJourney(startProgress + (targetProgress - startProgress) * easedProgress);

                if (progress < 1) {
                    window.requestAnimationFrame(animateRecord);
                    return;
                }

                renderRecordJourney(targetProgress);
                setRecordScrollPosition(targetProgress);
                recordAnimationRunning = false;
            }

            window.requestAnimationFrame(animateRecord);
        }

        function getJourneyScrollState() {
            const scrollDistance = recordJourney.offsetHeight - window.innerHeight;
            const journeyTop = recordJourney.getBoundingClientRect().top + window.scrollY;
            const scrollY = window.scrollY;

            return {
                inRange: scrollY >= journeyTop - 1 && scrollY <= journeyTop + scrollDistance + 1,
                progress: getRecordProgress()
            };
        }

        recordJourney.addEventListener('wheel', (event) => {
            const { inRange, progress } = getJourneyScrollState();
            if (!inRange) {
                return;
            }

            const direction = Math.sign(event.deltaY);
            if (!direction) {
                return;
            }

            const atFirstRecord = progress <= 0.01;
            const atLastRecord = progress >= recordSlides.length - 1 - 0.01;
            if ((direction < 0 && atFirstRecord) || (direction > 0 && atLastRecord)) {
                wheelDelta = 0;
                wheelDirection = 0;
                return;
            }
            event.preventDefault();
            event.preventDefault();
            if (recordAnimationRunning) {
                return;
            }

            const nearestStop = Math.round(progress);
            if (Math.abs(progress - nearestStop) >= 0.02) {
                alignRecordToNearestStop(progress);
                return;
            }

            if (direction !== wheelDirection) {
                wheelDelta = 0;
                wheelDirection = direction;
            }

            const deltaMultiplier = event.deltaMode === WheelEvent.DOM_DELTA_LINE
                ? 16
                : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
                    ? window.innerHeight
                    : 1;
            wheelDelta += Math.abs(event.deltaY * deltaMultiplier);
            if (wheelDelta >= 240) {
                wheelDelta = 0;
                startRecordTransition(direction);
            }
        }, { passive: false });

        recordJourney.addEventListener('touchstart', (event) => {
            if (event.touches.length !== 1 || !getJourneyScrollState().inRange) {
                touchStartY = null;
                return;
            }

            touchStartY = event.touches[0].clientY;
            touchGestureConsumed = false;
        }, { passive: true });

        recordJourney.addEventListener('touchmove', (event) => {
            if (touchStartY === null || event.touches.length !== 1) {
                return;
            }

            const displacement = touchStartY - event.touches[0].clientY;
            if (Math.abs(displacement) < 6) {
                return;
            }

            const direction = Math.sign(displacement);
            const { progress } = getJourneyScrollState();
            if ((direction < 0 && progress <= 0.01) || (direction > 0 && progress >= recordSlides.length - 1 - 0.01)) {
                touchStartY = null;
                return;
            }

            event.preventDefault();
            if (touchGestureConsumed || recordAnimationRunning || Math.abs(displacement) < 45) {
                return;
            }

            touchGestureConsumed = true;
            const nearestStop = Math.round(progress);
            if (Math.abs(progress - nearestStop) >= 0.02) {
                alignRecordToNearestStop(progress);
                return;
            }

            startRecordTransition(direction);
        }, { passive: false });

        recordJourney.addEventListener('touchend', () => {
            touchStartY = null;
        }, { passive: true });
        recordJourney.addEventListener('touchcancel', () => {
            touchStartY = null;
        }, { passive: true });

        function updateRecordJourney() {
            recordFrameRequested = false;
            if (!recordAnimationRunning) {
                renderRecordJourney(getRecordProgress());
            }
        }

        function requestRecordUpdate() {
            if (!recordFrameRequested) {
                window.requestAnimationFrame(updateRecordJourney);
                recordFrameRequested = true;
            }
        }

        window.addEventListener('scroll', requestRecordUpdate, { passive: true });
        window.addEventListener('resize', requestRecordUpdate);
        updateRecordJourney();
    }

    const videoFrame = document.querySelector('#current-video');
    const videoButtons = document.querySelectorAll('.video-title[data-video]');

    if (videoFrame) {
        videoButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const videoId = button.dataset.video;
                if (!videoId) {
                    return;
                }

                videoButtons.forEach((item) => {
                    const isActive = item === button;
                    item.classList.toggle('active', isActive);
                    item.setAttribute('aria-pressed', String(isActive));
                });

                videoFrame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0`;
                videoFrame.title = button.dataset.title || 'YUNNI video';
            });
        });

        videoButtons.forEach((button) => {
            button.setAttribute('aria-pressed', String(button.classList.contains('active')));
        });
    }
});
