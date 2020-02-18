const express = require("express");
const { signin } = require("../controllers/auth");
const userRouter = require("./user");
const kudosLogRouter = require("./kudos-log");

const router = express.Router();

router.use("/api/users", userRouter);
router.use("/api/kudos-logs", kudosLogRouter);

router.post("/auth/signin", signin);

module.exports = router;
