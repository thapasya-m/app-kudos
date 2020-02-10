const express = require("express");
const { getUsersByOrganizationId } = require('../controllers/user');
const { getLogs, logKudos } = require('../controllers/kudos-log');

const router = express.Router();

router.get('/user/:orgnizationId', getUsersByOrganizationId);
router.post('/kudos-logs', logKudos)
router.get('/kudos-logs/:receiverId', getLogs);

module.exports = router;
