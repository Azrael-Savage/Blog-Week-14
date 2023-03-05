const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route for creating a new post
router.post('/create_post', authMiddleware.requireAuth, postController.createPost);

// Route for displaying a single post
router.get('/:id', postController.getPost);

// Route for displaying the form to update a post
router.get('/update/:id', authMiddleware.requireAuth, postController.updatePostForm);

// Route for updating a post
router.post('/update/:id', authMiddleware.requireAuth, postController.updatePost);

// Route for deleting a post
router.get('/delete/:id', authMiddleware.requireAuth, postController.deletePost);

// Route for displaying the form to create a post
router.get('/create', authMiddleware.requireAuth, postController.createPostForm);

module.exports = router;
