// Client-side JS for login page

// On page load
window.onload = function() {
    // Handle login form submit event
    document.getElementById("loginForm").onsubmit = function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Get form data
      const formData = new FormData(document.getElementById("loginForm"));
  
      // Send POST request to server with form data
      fetch("/login", {
        method: "POST",
        body: formData
      })
        .then(res => {
          // Redirect to dashboard on successful login
          if (res.redirected) {
            window.location.href = res.url;
          }
        })
        .catch(err => {
          console.error(err);
        });
    };
  };
  