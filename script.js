// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Show the loader initially
    const loader = document.querySelector('.screen-load');
    
    // Set a timeout to hide the loader after 2 seconds
    setTimeout(function() {
        loader.style.display = 'none';  // Hide the loader
    }, 2000); // 2000ms = 2 seconds
});


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Function to reload the body content
    function reloadBody() {
        location.reload(); // This will reload the entire page
    }

    // Set an interval to reload the body every 3 seconds
    setInterval(reloadBody, 2000); // 3000ms = 3 seconds
});


