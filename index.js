const express = require("express");
const path = require("path");
const route = require("./routes/routes");
const app = express();
const port = 8000;

// 깃 PR오류때문에 변경사항 만들기 우우우우우

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", route);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});