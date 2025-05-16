const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
  ssl: { rejectUnauthorized: false } // Requerido por Supabase
});

const obtenerTodos = async () => {
  const result = await pool.query('SELECT * FROM productos');
  return result.rows;
};

module.exports = { obtenerTodos };

const agregarProducto = async ({ nombre, descripcion, medidas, categoria }) => {
  const query = `
    INSERT INTO productos (nombre, descripcion, medidas, categoria)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [nombre, descripcion, medidas, categoria];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = {
  obtenerTodos,
  agregarProducto
};
