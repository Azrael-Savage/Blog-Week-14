const express = require('express');
const passport = require('passport');
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

// GET request for login form
router.get('/login', authController.loginForm);

// POST request for login form
router.post(
  '/login',
  [
    // Validate email and password
    check('email').isEmail().withMessage('Invalid email address'),
    check('password')
      .notEmpty()
      .withMessage('Password must not be empty')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long'),
  ],
  authController.login
);

// GET request for signup form
router.get('/signup', authController.signupForm);

// POST request for signup form
router.post(
  '/signup',
  [
    // Validate name, email, and password
    check('name').notEmpty().withMessage('Name must not be empty'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('password')
      .notEmpty()
      .withMessage('Password must not be empty')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long'),
    check('confirmPassword')
      .notEmpty()
      .withMessage('Confirm password must not be empty')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords do not match');
        }
        return true;
      }),
  ],
  authController.signup
);

// GET request for logout
router.get('/logout', authController.logout);

// GET request for Google OAuth authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// GET request for Google OAuth callback
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

module.exports = router;
