const express = require('express');
const app = express();
const userRoutes = require('./routes/candidates');
const { sequelize } = require('./models'); 
app.use(express.json());

app.use('/candidates', userRoutes);
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
 
