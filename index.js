const express = require('express');
const sequelize = require('./config/db');
const app = require('./config/express');
const patientRoutes = require('./routes/patientRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');

sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

app.use('/api/patients', patientRoutes);
app.use('/api/hospitals', hospitalRoutes);

app.get('/',(req,res)=>{
  res.send({message:"hii sagar"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
