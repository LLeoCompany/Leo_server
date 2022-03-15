const dbConfig =require('../config/config.ts');
const Sequelize = require('sequelize');

const sequelizeConfig = new Sequelize(
    dbConfig.db,
    dbConfig.username,
    dbConfig.password,
    {
        host:dbConfig.host,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
);

const db = {sequelize:'',sequelizeConfig:'',tutorial:''};
db.sequelize = Sequelize;
db.sequelizeConfig = sequelizeConfig;
db.tutorial = require('./model.ts')(sequelizeConfig,Sequelize);
module.exports = db;
