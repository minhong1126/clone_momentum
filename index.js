const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = 8000;

// pug 설정
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 라이브러리 설정
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.cookie_secret_code));
app.use(session({
  resave: false,
  secret: process.env.cookie_secret_code,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false
  }
}));

// 라우터 설정
app.use("/", require("./routes/page"));

// 에러 처리
// app.use(function(req, res, next){
//   const err = new Error("Not Found 404");
//   err.status = 404;
//   next();
// });
// app.use(function(err, req, res, next){
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") == "development" ? err : {};
//   res.status(err.status || 500);
//   res.render("error");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});