document.addEventListener('DOMContentLoaded', () => {
    // Image to video transition
    const initialImage = document.querySelector('.initial-image');
    const backgroundVideo = document.querySelector('.background-video');
    const epAnnouncement = document.querySelector('.ep-announcement');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');
    const popup = document.querySelector('.popup-notification');
    let isVideoPlaying = false;

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
    }, 3000);

    // Update nav colors on scroll
    window.addEventListener('scroll', () => {
        const homeSection = document.querySelector('#home');
        const rect = homeSection.getBoundingClientRect();
        
        if (rect.bottom > 0 && isVideoPlaying) {
            navLinks.forEach(link => {
                link.classList.add('video-active');
            });
        } else {
            navLinks.forEach(link => {
                link.classList.remove('video-active');
            });
        }
    });

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
}); 