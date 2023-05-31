const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});

connection.connect(err => {
    const msg = err ? 'someting went wrong. ' + err : 'mysql server is ok.';
    console.log(msg);
});

module.exports = connection.promise();