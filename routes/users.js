const express = require('express');
const { getUsersByOrganizationId } = require('../controllers/user');

const userRoutes = express.Router();

userRoutes.get('/:orgnizationId', getUsersByOrganizationId);

module.export = userRoutes;
