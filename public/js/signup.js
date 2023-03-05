// Client-side JS for signup page

// On page load
window.onload = function() {
    // Handle signup form submit event
    document.getElementById("signupForm").onsubmit = function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Get form data
      const formData = new FormData(document.getElementById("signupForm"));
  
      // Send POST request to server with form data
      fetch("/signup", {
        method: "POST",
        body: formData
      })
        .then(res => {
          // Redirect to dashboard on successful signup
          if (res.redirected) {
            window.location.href = res.url;
          }
        })
        .catch(err => {
          console.error(err);
        });
    };
  };
  