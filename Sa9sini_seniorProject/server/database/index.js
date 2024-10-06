'use strict';
const { Sequelize, DataTypes } = require('sequelize')
const fs = require('fs');
const path = require('path');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Users = require('./models/Users')(sequelize, DataTypes)
db.Answers = require('./models/Answers')(sequelize, DataTypes)
db.Questions = require('./models/Questions')(sequelize, DataTypes)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// sequelize.sync({ force: true })
sequelize.authenticate()
  .then(() => console.log('your database is connected'))
  .catch((error) => console.log(error))


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
