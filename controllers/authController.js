const bcrypt = require('bcrypt');
const { User } = require('../models');
const { validationResult } = require('express-validator');

const saltRounds = 10;

exports.signupForm = (req, res) => {
  res.render('signup');
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).render('signup', { errors: errors.array() });
  }
  
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.redirect('/login');
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.loginForm = (req, res) => {
  res.render('login');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      req.session.user = user;
      res.redirect('/');
    } else {
      res.status(401).render('login', { error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
