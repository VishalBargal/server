const mysql = require('mysql');


const con = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12724400',
  password: 'IUhQkRsIZd',
  database: 'sql12724400',
  port:'3306'
});

// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'registerLogin',
// });

con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

module.exports = con;


