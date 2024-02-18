const express = require('express');
const router = express.Router();
const StaffController = require('../controllers/staff');


router.post('/',StaffController.StaffRegister)
router.post('/StaffLogin',StaffController.StaffLogin)

module.exports = router;