// Get the form element
const updatePostForm = document.querySelector('#update-post-form');

// Add an event listener for when the form is submitted
updatePostForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the default form submission

  const id = window.location.pathname.split('/').pop(); // Get the post ID from the URL
  const title = updatePostForm.querySelector('#title').value; // Get the updated title from the form input
  const content = updatePostForm.querySelector('#content').value; // Get the updated content from the form input

  try {
    // Send a PUT request to the server to update the post
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      window.location.href = '/dashboard'; // Redirect to the dashboard if the update was successful
    } else {
      throw new Error('Failed to update post'); // Throw an error if the update failed
    }
  } catch (err) {
    console.error(err);
  }
});
