const express = require('express');
const app = express();

const SV_PORT = 8000;
const DB_PORT = 3306;

const mysql = require('mysql');
const conn = {
    host: 'localhost',
    port: DB_PORT,
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

app.use(express.static(__dirname + "/front"));

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.listen(PORT, () => {
    console.log(`Server running in ${SV_PORT} Port`);
})
