const sequelize = require('./config/connection');
const seedPost = require('./seeds/Post-seed.js');
const seedUser = require('./seeds/User-seed.js');
const seedComment = require('./seeds/Comment-seed.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedPost();
  await seedComment();

  console.log('Seeding complete!');
};

seedAll();
