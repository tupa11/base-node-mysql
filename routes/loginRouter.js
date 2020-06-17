const express = require('express');
const router = express.Router();
const loginController = require('./../controllers/LoginController');
const loginRequest = require('./../requests/LoginRequest');

router.post('/', loginRequest, loginController.login);

module.exports = router;