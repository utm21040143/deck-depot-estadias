require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Importar rutas
const productosRoutes = require('./routes/productosRoutes');

// Usar rutas
app.use('/api/productos', productosRoutes);

// Ruta raíz opcional
app.get('/', (req, res) => {
  res.send('API Deck Depot funcionando 🚀');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
