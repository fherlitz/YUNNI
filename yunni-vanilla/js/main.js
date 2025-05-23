document.addEventListener('DOMContentLoaded', () => {
    // Image to video transition
    const initialImage = document.querySelector('.initial-image');
    const backgroundVideo = document.querySelector('.background-video');
    const epAnnouncement = document.querySelector('.ep-announcement');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');

    // Start video after 3 seconds
    setTimeout(() => {
        initialImage.classList.add('fade-out');
        backgroundVideo.classList.add('fade-in');
        backgroundVideo.play();
        
        // Change text color to white
        epAnnouncement.style.color = 'white';
        epAnnouncement.querySelectorAll('h1, h4').forEach(element => {
            element.style.color = 'white';
        });
        epAnnouncement.querySelectorAll('.ep-button').forEach(button => {
            button.style.borderColor = 'white';
            button.style.color = 'white';
        });

        // Change navigation color to white
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    }, 3000);

    // Update nav colors on scroll
    window.addEventListener('scroll', () => {
        const homeSection = document.querySelector('#home');
        const rect = homeSection.getBoundingClientRect();
        
        if (rect.bottom > 0) {
            navLinks.forEach(link => {
                link.style.color = 'white';
            });
        } else {
            navLinks.forEach(link => {
                link.style.color = 'black';
            });
        }
    });
}); 