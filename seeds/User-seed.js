const { User } = require("../models");

const userData = [
  {
    username: "BRIAN JONES",
    password: "password456",
  },
  {
    username: "Athena",
    password: "password123",
  },
];
const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
