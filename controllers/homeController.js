const { Post } = require('../models');

exports.index = async (req, res, next) => {
  try {
    const posts = await Post.findAll({ order: [['createdAt', 'DESC']] });
    res.render('home', { posts });
  } catch (err) {
    next(err);
  }
};
