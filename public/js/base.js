// Client-side JS to handle common functionality across pages

// On page load
window.onload = function() {
    // Handle logout link click event
    document.getElementById("logoutLink").onclick = function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Send POST request to /logout endpoint
      fetch("/logout", {
        method: "POST"
      })
        .then(res => {
          // Redirect to home page on successful logout
          if (res.redirected) {
            window.location.href = res.url;
          }
        })
        .catch(err => {
          console.error(err);
        });
    };
  };
  