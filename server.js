const express = require('express');
const app = express();
const userRoutes = require('./routes/candidates');
const { sequelize } = require('./models'); // Sequelize init

// Middleware
app.use(express.json());

// Routes
app.use('/candidates', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
 