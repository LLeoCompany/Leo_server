const mysql = require("mysql2");

const config = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sh6130lim",
  db: "leo_shop",
  dialect: mysql,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = config;
