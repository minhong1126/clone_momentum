const express = require("express");
const router = express.Router();

router.get('/', (req, res) => { 
    res.render("home/index");
  });
router.get('signUp', (req, res) => {
    res.render("signup/signUp");
});

module.exports = router;