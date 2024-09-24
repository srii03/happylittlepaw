        // Set the date we're counting down to
        const countDownDate = new Date("2024-10-01T00:00:00").getTime();

        // Update the countdown every 1 second
        const x = setInterval(function() {
            // Get current date and time
            const now = new Date().getTime();

            // Find the distance between now and the countdown date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="countdown"
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " 
                + minutes + "m " + seconds + "s ";

            // If the countdown is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
        document.getElementById("confirmation-message").style.display = "block";

        document.addEventListener("DOMContentLoaded", function() {
            const aboutUsLink = document.getElementById("about-us-link");
            const overlay = document.getElementById("overlay");
            const closeOverlayButton = document.getElementById("close-overlay");
        
            // Show overlay when "About Us" link is clicked
            aboutUsLink.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent default anchor behavior
                overlay.style.display = "block"; // Show the overlay
            });
        
            // Close overlay when close button is clicked
            closeOverlayButton.addEventListener("click", function() {
                overlay.style.display = "none"; // Hide the overlay
            });
        });


 // Preorder Form Submission Handling
 document.getElementById("preorder-form").addEventListener("submit", function(event) {
     event.preventDefault(); // Prevent the default form submission

     // Display confirmation message
     document.getElementById("confirmation-message").style.display = "block";

     // Optionally, clear the form inputs
     this.reset();
 });
