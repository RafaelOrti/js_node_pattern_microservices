const express = require('express');
const app = express();

const routes = require('./routes');
const database = require('../../config/database');

// Conecta a la base de datos
database.connectDatabase();

// Agrega las rutas del servicio
app.use('/service1', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Service 1 is running on port ${PORT}`);
});
