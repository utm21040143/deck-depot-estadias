const ProductoCard = ({ producto }) => {
  return (
    <div className="producto-card">
      <h3>{producto.nombre}</h3>
      <p><strong>Medidas:</strong> {producto.medidas}</p>
      <p>{producto.descripcion}</p>
      <p><em>Categoría:</em> {producto.categoria}</p>
    </div>
  );
};

export default ProductoCard;
