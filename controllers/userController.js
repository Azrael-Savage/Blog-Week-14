const bcrypt = require('bcrypt');
const { User } = require('../models');

exports.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({ username, password: hashedPassword });
    res.redirect('/login');
  } catch (err) {
    next(err);
  }
};
