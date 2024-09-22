document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for the "Get Started" button
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(event) {
            event.preventDefault();
            const ctaSection = document.querySelector('#cta');
            
            if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Element with ID "cta" not found.');
            }
        });
    } else {
        console.error('CTA button not found.');
    }

    // Video play functionality
    const playButton = document.getElementById('playButton');
    const petVideo = document.getElementById('petVideo');

    playButton.addEventListener('click', function() {
        petVideo.style.display = 'block'; // Show video
        petVideo.play(); // Play video
        playButton.style.display = 'none'; // Hide play button
    });

    petVideo.addEventListener('ended', function() {
        petVideo.style.display = 'none'; // Hide video when it ends
        playButton.style.display = 'block'; // Show play button again
    });
});
