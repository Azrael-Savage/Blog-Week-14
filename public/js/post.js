// Client-side JS for post-related pages

// On page load
window.onload = function() {
    // Handle delete post button click event
    document.getElementById("deletePostBtn").onclick = function(event) {
      event.preventDefault(); // Prevent default button behavior
  
      // Send DELETE request to server to delete post
      fetch(window.location.pathname, {
        method: "DELETE"
      })
        .then(res => {
          // Redirect to dashboard on successful deletion
          if (res.redirected) {
            window.location.href = res.url;
          }
        })
        .catch(err => {
          console.error(err);
        });
    };
  };
  