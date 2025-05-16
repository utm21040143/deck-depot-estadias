import { useEffect, useState } from 'react';
import ProductoCard from '../components/ProductoCard';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://deck-depot-backend-abc123-3001.app.github.dev/api/productos')
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch(console.error);
  }, []);

  return (
    <section className="productos" id="productos">
      <h2>Productos</h2>
      <div className="grid">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
};

export default Productos;
