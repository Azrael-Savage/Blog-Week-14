const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('./db');

const router = express.Router();

// GET request for login form
router.get('/login', (req, res) => {
  res.render('login');
});

// POST request for login form
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Save user id to session
    req.session.userId = user.id;

    res.redirect('/dashboard');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET request for signup form
router.get('/signup', (req, res) => {
  res.render('signup');
});

// POST request for signup form
router.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Validate name, email, password, and confirmPassword
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Passwords do not match' });
  }

  if (password.length < 8) {
    return res.status(400).json({ msg: 'Password must be at least 8 characters long' });
  }

  try {
    // Check if user already exists
    let user = await db.User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = await db.User.create({ name, email, password: hashedPassword });

    // Save user id to session
    req.session.userId = user.id;

    res.redirect('/dashboard');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
