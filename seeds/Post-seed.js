const { Post } = require("../models");

const postData = [
  {
    creator_id: 1,
    title: "Handlebars Features like your uncle!",
    post_text: "I could stare at this code all day and not get bored. It's just that good.",
  },
  {
    creator_id: 1,
    title: "Code is great!",
    post_text: "I feel like I just won the lottery after seeing this code. It's that amazing!",
  },
];
const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;
