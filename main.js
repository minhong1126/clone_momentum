const express = require('express');
const mysql = require('mysql');

const SV_PORT = 8000;
const DB_PORT = 3306;

const app = express();

const conn = {
    host: 'localhost',
    port: DB_PORT,
    id: 'root',
    password: '0000',
    database: 'todoList'
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
    res.sendFile(__dirname + "/index.html");
});

app.post("/loginPost", function(req, res){
    console.log(req.body);
    res.send("Posted");
})

app.listen(SV_PORT, () => {
    console.log(`Server running in ${SV_PORT} Port`);
})
