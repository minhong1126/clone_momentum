const express = require('express');
const path = require("path");
const app = express();
const router = express.Router();
const port = 8000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => { 
  res.render("index");
});
app.get('./route/signUp', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});