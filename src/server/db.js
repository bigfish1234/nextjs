const mysql = require('mysql');
const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.SQL_DB_HOST,
  port: process.env.SQL_DB_PORT,
  user: process.env.SQL_DB_USER,
  password: process.env.SQL_DB_PASSWORD,
  database: process.env.SQL_DB_DATABASE
});

module.exports = db;