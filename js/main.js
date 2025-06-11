document.addEventListener('DOMContentLoaded', () => {
    // Image to video transition
    const initialImage = document.querySelector('.initial-image');
    const backgroundVideo = document.querySelector('.background-video');
    const epAnnouncement = document.querySelector('.ep-announcement');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');
    const mobileMenuSpans = document.querySelectorAll('.mobile-menu-btn span');
    const popup = document.querySelector('.popup-notification');
    let isVideoPlaying = false;

    // Only run video transition if we're on the home page
    if (initialImage && backgroundVideo && epAnnouncement) {
        // Start video after 3 seconds
        setTimeout(() => {
            initialImage.classList.add('fade-out');
            backgroundVideo.classList.add('fade-in');
            backgroundVideo.play();
            isVideoPlaying = true;
            
            // Change text color to white
            epAnnouncement.style.color = 'white';
            epAnnouncement.querySelectorAll('h1, h4').forEach(element => {
                element.style.color = 'white';
            });

            // Change navigation color to white
            navLinks.forEach(link => {
                link.classList.add('video-active');
            });
            
            // Change mobile menu spans to white
            mobileMenuSpans.forEach(span => {
                span.classList.add('video-active');
            });
        }, 3000);

        // Update nav colors on scroll
        window.addEventListener('scroll', () => {
            const homeSection = document.querySelector('#home');
            if (homeSection) {
                const rect = homeSection.getBoundingClientRect();
                
                if (rect.bottom > 0 && isVideoPlaying) {
                    navLinks.forEach(link => {
                        link.classList.add('video-active');
                    });
                    mobileMenuSpans.forEach(span => {
                        span.classList.add('video-active');
                    });
                } else {
                    navLinks.forEach(link => {
                        link.classList.remove('video-active');
                    });
                    mobileMenuSpans.forEach(span => {
                        span.classList.remove('video-active');
                    });
                }
            }
        });
    }

    // Popup functionality
    const newsletterPopup = document.querySelector('.newsletter-popup');
    const overlay = document.querySelector('.overlay');
    const closePopup = document.querySelector('.close-popup');
    const closeNewsletter = document.querySelector('.close-newsletter');
    const newsletterForm = document.querySelector('.newsletter-form');

    // Show popup after 5 seconds
    setTimeout(() => {
        if (popup) {
            popup.classList.add('show');
        }
    }, 5000);

    // Handle popup click
    if (popup) {
        popup.addEventListener('click', () => {
            popup.classList.remove('show');
            if (newsletterPopup) {
                newsletterPopup.classList.add('show');
            }
            if (overlay) {
                overlay.classList.add('show');
            }
        });
    }

    // Close popup
    if (closePopup) {
        closePopup.addEventListener('click', (e) => {
            e.stopPropagation();
            if (popup) {
                popup.classList.remove('show');
            }
        });
    }

    // Close newsletter
    if (closeNewsletter) {
        closeNewsletter.addEventListener('click', () => {
            if (newsletterPopup) {
                newsletterPopup.classList.remove('show');
            }
            if (overlay) {
                overlay.classList.remove('show');
            }
        });
    }

    // Handle newsletter form submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            // Here you would typically send the email to your backend
            alert('Thanks for subscribing!');
            if (newsletterPopup) {
                newsletterPopup.classList.remove('show');
            }
            if (overlay) {
                overlay.classList.remove('show');
            }
        });
    }

    // Mobile Menu Functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinksMobile = document.querySelectorAll('.nav-menu a');
    const mobileCurvedLogo = document.querySelector('.mobile-curved-logo');

    if (mobileMenuBtn && navMenu) {
        function toggleMenu() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        }

        mobileMenuBtn.addEventListener('click', () => {
            toggleMenu();
        });

        // Close mobile menu when clicking a link
        navLinksMobile.forEach(link => {
            link.addEventListener('click', () => {
                toggleMenu();
            });
        });

        // Close overlay when clicking outside the menu links
        navMenu.addEventListener('click', function(e) {
            if (e.target === this) { // Clicked directly on the menu background, not on the links
                toggleMenu();
            }
        });

        // Close menu when clicking the mobile curved logo
        if (mobileCurvedLogo) {
            mobileCurvedLogo.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        }
    }

    // Artwork hover effect
    const artworkItems = document.querySelectorAll('.artwork-item');
    const fullscreenBg = document.createElement('div');
    fullscreenBg.className = 'fullscreen-bg';
    document.body.appendChild(fullscreenBg);
    const releasesHeading = document.querySelector('#releases h2');
    let currentColor = 'var(--white)';
    
    // Function to check if element is in center of viewport
    function isInCenter(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight * 0.5;
        const threshold = 150;
        
        return Math.abs(elementCenter - viewportCenter) < threshold;
    }

    // Function to handle color change
    function handleColorChange(item, img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pixel = ctx.getImageData(img.width - 1, 0, 1, 1).data;
        const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
        
        if (color !== currentColor) {
            currentColor = color;
            fullscreenBg.style.backgroundColor = color;
            if (releasesHeading) {
                releasesHeading.style.backgroundColor = color;
            }
        }
    }

    // Function to reset colors
    function resetColors() {
        currentColor = 'transparent';
        fullscreenBg.style.backgroundColor = currentColor;
        if (releasesHeading) {
            releasesHeading.style.backgroundColor = 'var(--white)';
        }
    }
    
    artworkItems.forEach(item => {
        const img = item.querySelector('img');
        
        if (img) {
            // Handle hover for desktop
            img.addEventListener('load', () => {
                item.addEventListener('mouseenter', () => {
                    handleColorChange(item, img);
                });
                
                item.addEventListener('mouseleave', () => {
                    resetColors();
                });
            });

            // If image is already loaded
            if (img.complete) {
                item.addEventListener('mouseenter', () => {
                    handleColorChange(item, img);
                });
                
                item.addEventListener('mouseleave', () => {
                    resetColors();
                });
            }
        }
    });

    // Handle scroll for mobile
    let isMobile = window.innerWidth <= 767;
    let scrollTimeout;

    window.addEventListener('resize', () => {
        isMobile = window.innerWidth <= 767;
    });

    window.addEventListener('scroll', () => {
        if (!isMobile) return;

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            let centeredItem = null;
            
            artworkItems.forEach(item => {
                if (isInCenter(item)) {
                    centeredItem = item;
                }
            });

            if (centeredItem) {
                const img = centeredItem.querySelector('img');
                if (img && img.complete) {
                    handleColorChange(centeredItem, img);
                }
            } else {
                resetColors();
            }
        }, 100); // Debounce scroll events
    });

    // Video section functionality
    const videoTitles = document.querySelectorAll('.video-title');
    const currentVideo = document.getElementById('current-video');
    
    videoTitles.forEach(title => {
        title.addEventListener('click', function() {
            // Remove active class from all titles
            videoTitles.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked title
            this.classList.add('active');
            
            // Update video source
            const videoId = this.getAttribute('data-video');
            currentVideo.src = `https://www.youtube-nocookie.com/embed/${videoId}?si=dYI71TzB_0YHh9X7`;
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (mobileMenuBtn && navMenu) {
                    mobileMenuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Logo rotation on scroll
    const curvedLogo = document.querySelector('.mobile-curved-logo');
    let lastScrollY = window.scrollY;
    let rotation = 0;

    function updateLogoRotation() {
        const currentScrollY = window.scrollY;
        const scrollDiff = currentScrollY - lastScrollY;
        
        // Adjust rotation based on scroll direction and speed
        rotation += scrollDiff * 0.5;
        
        // Apply rotation to the logo
        if (curvedLogo) {
            curvedLogo.style.transform = `rotate(${rotation}deg)`;
        }
        
        lastScrollY = currentScrollY;
    }

    // Use both scroll and touch events for better mobile support
    window.addEventListener('scroll', updateLogoRotation, { passive: true });
    window.addEventListener('touchmove', updateLogoRotation, { passive: true });

    // Image slider functionality
    const slider = document.querySelector('.image-slider');
    const video = document.querySelector('.background-video');
    
    if (slider && video) {
        // Play video when it's loaded
        video.addEventListener('loadeddata', function() {
            video.play();
        });
        
        // Handle video errors
        video.addEventListener('error', function() {
            console.error('Error loading video');
        });
    }
}); 