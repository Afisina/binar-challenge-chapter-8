const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const expressLayout = require("express-ejs-layouts");

//view engine
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayout);
app.set("layout", "layouts/default");

const setDefault = (req, res, next) => {
  res.locals.contentName = "Default";
  next();
};

// middlewares
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const errorHandler = require("./server/middlewares/errorHandler");
app.use(errorHandler);

/**
 * @Routes /api
 * entrypoint for all API routes
 */
const apiRouter = require("./server/routes");
app.use("/api", apiRouter);

const swaggerUi = require("./server/routes/swagger-ui");
app.use("/docs", swaggerUi);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
