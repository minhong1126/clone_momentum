const express = require('express');
// const cookie = require('cookie-parser');
const db = require('./back/db');
const app = express();
const SV_PORT = 8000;

app.use(express.static(__dirname + "/front"));

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/loginPost", function(req, res){
    const {userid, pw} = req.body;
    const exist = db.get(userid);
    if(exist){
        // 존재 O
    }
    else{
        // 존재 X
    }

    console.log(req.body);
    res.send("Posted");
})


app.listen(SV_PORT, () => {
    console.log(`Server running in ${SV_PORT} Port`);
})
