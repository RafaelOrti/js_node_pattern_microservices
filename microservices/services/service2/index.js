const express = require('express');
const app = express();

const routes = require('./routes');
const database = require('../../config/database');

// Conecta a la base de datos
database.connectDatabase();

// Agrega las rutas del servicio
app.use('/service2', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Service 2 is running on port ${PORT}`);
});
