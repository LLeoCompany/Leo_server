module.exports = {
  host:'localhost',
  username:'root',
  password:'sh6130lim',
  db:'shop_db',
  dialect:'mysql',
  pool :{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

// host: MySQL IP (동일한 환경일 경우 localhost)
// username: MySQL 접속 유저명
// password: MySQL 접속 비밀번호
// db: MySQL 접속 DB명
// dialect: DB Connector 설정 (mysql, mariadb, postgres, mssql, ...)
// pool: DB Connection Pool 설정 

