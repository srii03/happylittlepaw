286.	document.addEventListener('DOMContentLoaded', function() {
287.	    // Smooth scrolling for the "Get Started" button
288.	    const ctaButton = document.querySelector('.cta-button');
289.	    
290.	    if (ctaButton) {
291.	        ctaButton.addEventListener('click', function(event) {
292.	            event.preventDefault();
293.	            const ctaSection = document.querySelector('#cta');
294.	            
295.	            if (ctaSection) {
296.	                ctaSection.scrollIntoView({ behavior: 'smooth' });
297.	            } else {
298.	                console.error('Element with ID "cta" not found.');
299.	            }
300.	        });
301.	    } else {
302.	        console.error('CTA button not found.');
303.	    }
304.	
305.	    // Video play functionality
306.	    const playButton = document.getElementById('playButton');
307.	    const petVideo = document.getElementById('petVideo');
308.	
309.	    playButton.addEventListener('click', function() {
310.	        petVideo.style.display = 'block'; // Show video
311.	        petVideo.play(); // Play video
312.	        playButton.style.display = 'none'; // Hide play button
313.	    });
314.	
315.	    petVideo.addEventListener('ended', function() {
316.	        petVideo.style.display = 'none'; // Hide video when it ends
317.	        playButton.style.display = 'block'; // Show play button again
318.	    });
319.	});

