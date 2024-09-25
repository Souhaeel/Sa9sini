const { Sequelize, DataTypes } = require('sequelize')
const config = require("./config/config");
const db = {}


const consequelize = new Sequelize(config.database, config.user, config.password,
  {
    host: config.host,
    dialect: 'mysql'
  })


db.Users = require('./models/Users')(consequelize, DataTypes)
db.Answers = require('./models/Answers')(consequelize, DataTypes)
db.Questions = require('./models/Questions')(consequelize, DataTypes)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db); // Call the associate function
  }
});

// consequelize.sync({ force : true })
consequelize.sync({ alter : true })

consequelize.authenticate()
  .then(() => console.log('your database is connected'))
  .catch((error) => console.log(error))





db.Sequelize = Sequelize;
db.consequelize = consequelize;
module.exports = db;