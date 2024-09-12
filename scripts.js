// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');

    // Array of background colors
    const colors = ['#e0f7fa', '#f1f8e9', '#ffecb3', '#fff3e0', '#e8f5e9'];
    let currentColorIndex = 0;

    // Function to change background color
    function changeBackgroundColor() {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Change background color every 5 seconds
    setInterval(changeBackgroundColor, 5000);
});