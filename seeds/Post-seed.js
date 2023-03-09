const { Post } = require("../models");

const postData = [
  {
    title: "Example Title 1",
    content: "This is an example post.",
    creator_id: 1,
  },
  {
    title: "Example Title 2",
    content: "This is another example post.",
    creator_id: 2,
  },
  // additional post objects
];

const seedPost = () => {
  return Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedPost;
