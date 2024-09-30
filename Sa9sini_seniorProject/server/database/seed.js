const { faker } = require('@faker-js/faker');
const db = require('../database/index'); // Import the db object that includes sequelize and models

const seedDatabase = async () => {
  try {
    // Sync the database
    await db.sequelize.sync({ force: true });

    // Seed Users
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      });
    }
    await db.Users.bulkCreate(users);

    // Seed Questions
    const questions = [];
    const userIds = await db.Users.findAll({ attributes: ['id'] });
    const userIdList = userIds.map(user => user.id);

    for (let i = 0; i < 10; i++) {
      questions.push({
        Question: faker.lorem.sentence(),
        category: faker.random.word(),
        QuestionDate: faker.date.past(),
        userId: faker.random.arrayElement(userIdList),
      });
    }
    await db.Questions.bulkCreate(questions);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
};

seedDatabase();
