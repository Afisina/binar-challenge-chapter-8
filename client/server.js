const express = require("express");
const app = express();
const { PORT = 5000 } = process.env;
const expressLayout = require("express-ejs-layouts");

//view engine
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayout);
app.set("layout", "layouts/default");

//parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//middleware
const setDefault = (req, res, next) => {
  res.locals.contentName = "Default";
  next();
};

//routing
const router = require("./router");
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
