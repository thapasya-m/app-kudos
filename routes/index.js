const express = require("express");
const userRoutes = require('./users');
const kudoslogRoutes = require('./kudos-logs');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/kudos-logs', function(req, res, next) {console.log('pop'); next();}, kudoslogRoutes);

module.exports = router;
