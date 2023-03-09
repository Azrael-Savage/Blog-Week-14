onst userId = document.getElementById("user-id").innerHTML;
const btns = document.querySelectorAll(".comment-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (!userId) return document.location.replace("/login");

    const postId = btn.innerHTML.split("#")[1];
    document.getElementById("create-comment-form").classList.remove("hidden");

    const sendComment = document.getElementById("send-comment");
    sendComment.addEventListener("click", async (event) => {
      event.preventDefault();
      const commentText = document.getElementById("new-comment").value.trim();

      if (commentText) {
        const response = await fetch(`/api/comment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            creator_id: userId,
            post_id: postId,
            comment_text: commentText,
          }),
        });
        if (response.ok) {
          document.location.replace("/");
        } else {
          alert("Comment Failed");
        }
      }
    });

  });
});
