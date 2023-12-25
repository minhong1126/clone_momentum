const mysql = require('mysql');
const DB_PORT = 3306;

const db = mysql.createConnection({
    host: 'localhost',
    port: DB_PORT,
    id: 'root',
    password: '0000',
    database: 'todoList'
});

db.connect();