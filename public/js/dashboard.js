const getPosts = async () => {
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  
  const populatePosts = (posts) => {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
  
    posts.forEach((post, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${post.title}</td>
        <td>${post.body}</td>
        <td>
          <a href="/posts/${post.id}" class="btn btn-info mr-2">View</a>
          <a href="/update_post/${post.id}" class="btn btn-primary mr-2">Edit</a>
          <a href="/delete_post/${post.id}" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this post?')">Delete</a>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  };
  
  const loadPosts = async () => {
    const posts = await getPosts();
    populatePosts(posts);
  };
  
  loadPosts();
  