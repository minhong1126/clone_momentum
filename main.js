const express = require('express');
// const cookie = require('cookie-parser');
const db = require('./back/db');
const app = express();
const SV_PORT = 8000;

app.use(express.static(__dirname + "/front"));

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/sign", (req, res) => {
    res.sendfile(__dirname, "/front/signup.js");
})

app.post("/loginPost", function(req, res){
    const {userid, pw} = req.body;
    const exist = db.get(userid);
    if(exist){
        // 존재 O, 로그인
    }
    else{
        // 존재 X
        const locChange = confirm("존재하지 않는 계정입니다. 회원가입 하시겠습니까?");
        if(locChange){
            window.location.href = "/clone_momentum/front/routes/signup.js";
        }
        else{

        }
    }

    console.log(req.body);
    res.send("Posted");
})


app.listen(SV_PORT, () => {
    console.log(`Server running in ${SV_PORT} Port`);
})
