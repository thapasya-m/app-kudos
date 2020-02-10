const express = require('express');
const { logKudos, getLogs, } = require('../controllers/kudos-log');

const router = express.Router();

router.post('/', logKudos);
router.get('/:receiverId', getLogs)

module.exports = router;