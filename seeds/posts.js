module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('posts', [{
        title: 'My First Post',
        body: 'This is my first blog post.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('posts', null, {});
    }
  };
  