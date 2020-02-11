const express = require("express");
const { getUsersByOrganizationId, create } = require('../controllers/user');
const { getLogs, logKudos } = require('../controllers/kudos-log');
const { verifyId } = require('../utils/middlewares');

const router = express.Router();

router.get('/user', create);
router.get('/user/:id', verifyId,  getUsersByOrganizationId);
router.post('/kudos-logs', logKudos)
router.get('/kudos-logs/:id', getLogs);

module.exports = router;
