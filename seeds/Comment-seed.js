const { Comment } = require("../models");


const commentData = [
  {
    creator_id: 1,
    post_id: 1,
    comment_text: " Wow, this is so easy even a computer illiterate like me can understand it!",
  },
  {
    creator_id: 1,
    post_id: 2,
    comment_text: "I wish I could write code like this. You're a genius!",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;
