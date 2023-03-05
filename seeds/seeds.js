const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
  {
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: 'password123',
  },
  {
    username: 'janedoe',
    email: 'janedoe@gmail.com',
    password: 'password456',
  },
];

const postData = [
  {
    title: 'Post 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit diam at diam elementum, sit amet bibendum quam bibendum.',
    user_id: 1,
  },
  {
    title: 'Post 2',
    body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc suscipit urna ac quam vestibulum finibus.',
    user_id: 1,
  },
  {
    title: 'Post 3',
    body: 'Aliquam id augue aliquet, blandit nisl eget, vulputate dolor. Nullam euismod lectus eget magna ultrices egestas.',
    user_id: 2,
  },
  {
    title: 'Post 4',
    body: 'Mauris quis est nec purus dictum lobortis. Sed in bibendum massa, eget lobortis elit. Sed a nisi vitae justo venenatis posuere.',
    user_id: 2,
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
