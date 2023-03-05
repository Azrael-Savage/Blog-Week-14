const express = require('express');
const app = express();
const session = require('express-session');
const { sequelize } = require('./models');
const authMiddleware = require('./middlewares/authMiddleware')

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// Session middleware
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);

// Routes
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}`));
});
