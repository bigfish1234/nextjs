const mysql = require('mysql');
const db = mysql.createPool({
  connectionLimit: 10,
  host: '172.16.5.64',
  port: '3306',
  user: 'root',
  password: 'Zzh!@7465671',
  database: 'spzn'
});

module.exports = db;