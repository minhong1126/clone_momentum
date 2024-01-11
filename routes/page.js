const express = require("express");
const router = express.Router();

router.get('/', (req, res) => { 
    if(login){
        res.render("index", {title: "todo"});
    }
    else{
        res.render("login", {title: "login"});
    }
});
router.get('/login', (req, res) => {
    res.render("login", {title: "login"})
});
router.get('/join', (req, res) => {
    res.render("join", {
        title: "signup",
        user: null
    });
});

module.exports = router;