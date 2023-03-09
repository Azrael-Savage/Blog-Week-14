const { User } = require("../models");

const userData = [
  {
    username: "example1",
    email: "example1@example.com",
    password: "password1",
  },
  {
    username: "example2",
    email: "example2@example.com",
    password: "password2",
  },
  // additional user objects
];

const seedUser = () => {
  return User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUser;
