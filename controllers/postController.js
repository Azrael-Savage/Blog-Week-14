const { Post, User } = require('../models');

exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id, { include: User });
    res.render('post', { post });
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, body } = req.body;
    const post = await Post.create({
      title,
      body,
      userId: req.session.user.id,
    });
    res.redirect(`/posts/${post.id}`);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { title, body } = req.body;
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      const err = new Error('Post not found');
      err.statusCode = 404;
      throw err;
    }
    await post.update({ title, body });
    res.redirect(`/posts/${post.id}`);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      const err = new Error('Post not found');
      err.statusCode = 404;
      throw err;
    }
    await post.destroy();
    res.redirect('/dashboard');
  } catch (err) {
    next(err);
  }
};

exports.createPostForm = (req, res) => {
  res.render('create_post');
};

exports.updatePostForm = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      const err = new Error('Post not found');
      err.statusCode = 404;
      throw err;
    }
    res.render('update_post', { post });
  } catch (err) {
    next(err);
  }
};
