const mysql = require('mysql');
const conn = {
    host: 'localhost',
    port: '3306',
    id: 'id',
    database: 'todolist'
};

const connection = mysql.createConnection(conn);
connection.connect();

test = "SELECT * FROM MEMBERS";

connection.query(test, function (err, result, field){
    if(err){
        console.log("Query Error");
    }
    else{
        console.log(result);
    }
});

connection.end();