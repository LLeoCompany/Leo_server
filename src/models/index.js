const dbConfig = require("../config/dbconfig");
const Sequelize = require("sequelize");

const sequelizeConfig = new Sequelize(
  dbConfig.db,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    db: dbConfig.db,
  }
);

const db = {};
db.sequelize = Sequelize;
db.sequelizeConfig = sequelizeConfig;
db.tutorial = require("./model")(sequelizeConfig, Sequelize);

module.exports = db;
