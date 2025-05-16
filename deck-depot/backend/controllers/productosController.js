// Aquí pondremos lógica para obtener productos desde PostgreSQL después
const { obtenerTodos, agregarProducto } = require('../models/productoModel');

const obtenerProductos = async (req, res) => {
  try {
    const productos = await obtenerTodos();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};

const crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, medidas, categoria } = req.body;

    if (!nombre || !descripcion || !medidas || !categoria) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    const nuevoProducto = await agregarProducto({ nombre, descripcion, medidas, categoria });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};

module.exports = {
  obtenerProductos,
  crearProducto
};
