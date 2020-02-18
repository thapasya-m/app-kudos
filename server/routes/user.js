const { getUsersByOrganizationId, create } = require("../controllers/user");
const { verifyId } = require("../utils/middlewares");

const express = require("express");
const userRouter = express.Router();

userRouter.get("/:id", verifyId, getUsersByOrganizationId);
userRouter.get("/", create);

module.exports = userRouter;
