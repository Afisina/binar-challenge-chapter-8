const apiRouter = require("express").Router();
const controller = require("../controllers");
const v1 = require("./v1");

apiRouter.use("/v1", v1);
apiRouter.get("/", controller.home);
apiRouter.use(controller.notFound);
apiRouter.use(controller.exception);

const dashboard = require("./dashboard");
apiRouter.use("/dashboard", dashboard);

const auth = require("./auth");
apiRouter.use("/auth", auth);

module.exports = apiRouter;
