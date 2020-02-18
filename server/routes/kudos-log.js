const express = require("express");
const { getLogs, logKudos, createLogs } = require("../controllers/kudos-log");
const { verifyId } = require("../utils/middlewares");

const kudosLogRouter = express.Router();

kudosLogRouter.get("/:id", verifyId, getLogs);
kudosLogRouter
  .route("/")
  .get(createLogs)
  .post(logKudos);

module.exports = kudosLogRouter;
