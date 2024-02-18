const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');


router.post('/',UserController.UserRegister)
router.post('/UserLogin',UserController.UserLogin)

module.exports = router;