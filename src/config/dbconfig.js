const mysql = require("mysql2");

const config = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sh6130lim",
  database: "leo_shop",
});

export default config;
