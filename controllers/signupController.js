const bcrypt = require('bcrypt');
const { User } = require('../models');
const { validationResult } = require('express-validator');

const saltRounds = 10;

exports.signup_get = (req, res) => {
  res.render('signup');
};

exports.signup_post = async (req, res) => {
  const { username, email, password } = req.body;
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).render('signup', { errors: errors.array() });
  }
  
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.redirect('/login');
  } catch (error) {
    res.status(500).send(error);
  }
};
