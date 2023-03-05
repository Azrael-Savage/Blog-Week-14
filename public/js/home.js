// Client-side JS for home page

// On page load
window.onload = function() {
    // Handle search form submit event
    document.getElementById("searchForm").onsubmit = function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Get search query value
      const query = document.getElementById("searchInput").value.trim();
  
      // If query is not empty, redirect to search results page with query param
      if (query) {
        window.location.href = "/search?query=" + query;
      }
    };
  };
  