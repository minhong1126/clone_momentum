const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const route = require("./routes/routes");

const app = express();
const port = 8000;

// pug 설정
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", route);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser('secret code'));

// 세션 설정
app.use(session({
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false
  }
}));

// 에러 처리
app.use(function(err, req, res, next){
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") == "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});