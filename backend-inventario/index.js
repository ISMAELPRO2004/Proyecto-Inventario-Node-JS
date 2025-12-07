const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Permite conexiones desde el Front
app.use(express.json()); // Permite recibir JSON

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola desde Express!' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});