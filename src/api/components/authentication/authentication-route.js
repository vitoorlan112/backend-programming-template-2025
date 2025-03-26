const express = require('express');
const { loginController } = require('./authenticationController');

const router = express.Router();

router.post('/api/authentication/login', loginController); // Pastikan ini sesuai

module.exports = router;
