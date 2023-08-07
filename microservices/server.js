const http = require('http');
const express = require('express');
const app = express();

// Importa las instancias de Express de service1 y service2
const service1App = require('./microservices/services/service1/index');
const service2App = require('./microservices/services/service2/index');

const PORT = process.env.PORT || 3000;

app.use('/service1', service1App);
app.use('/service2', service2App);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
