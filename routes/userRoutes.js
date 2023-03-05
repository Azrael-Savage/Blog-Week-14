const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

// Route that requires authentication
router.get('/', auth.requireAuth, userController.getUserProfile);

// Public route
router.get('/:username', userController.getUser);

module.exports = router;
