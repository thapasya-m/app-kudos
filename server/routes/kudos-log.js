const express = require("express");
const { getLogs, logKudos, createLogs } = require("../controllers/kudos-log");
const { verifyId } = require("../utils/middlewares");

const kudosLogRouter = express.Router();

kudosLogRouter.get("/:id", verifyId, getLogs);
kudosLogRouter
  .route("/")
  .get(createLogs)
  .post(/* [middleware to authorize this action,] */logKudos);

module.exports = kudosLogRouter;
