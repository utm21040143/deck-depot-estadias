import { FaCity } from 'react-icons/fa';

const BannerInformativo = () => {
  return (
    <section className="banner-informativo">
      <div className="bloque icono">
        <FaCity className="icono-bloque" />
        <p><span className="bold">Nuestros</span> <em>Proyectos</em></p>
      </div>

      <div className="bloque texto">
        <p>
          <span className="resaltado">Deck Depot</span> es una empresa mexicana que ofrece materiales de alta calidad con un diseño y textura excepcional. Nos comprometemos con la excelencia, brindando asesoría personalizada y cuidando la calidad, los tiempos y los resultados en cada proyecto, con el objetivo de ser <span className="destacado">tu proveedor de confianza.</span>
        </p>
      </div>
    </section>
  );
};

export default BannerInformativo;
