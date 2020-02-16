const express = require("express");
const { getUsersByOrganizationId, create } = require('../controllers/user');
const { getLogs, logKudos } = require('../controllers/kudos-log');
const { verifyId } = require('../utils/middlewares');
const {signin} = require('../controllers/auth');
const router = express.Router();

router.post('/auth/signin', signin);
router.get('/api/user', create);
router.get('/api/user/:id', verifyId,  getUsersByOrganizationId);
router.post('/api/kudos-logs', logKudos)
router.get('/api/kudos-logs/:id', getLogs);

module.exports = router;
