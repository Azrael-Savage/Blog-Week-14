module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
    }
  };
  