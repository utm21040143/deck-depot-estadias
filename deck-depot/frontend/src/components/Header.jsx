import { FaWhatsapp, FaYoutube, FaTiktok, FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';

const Header = () => {
  return (
     <header>
      {/* Barra superior */}
      <div className="top-bar">
        <div className="telefono">
          <span>(449) 125 0958</span>
          <FaWhatsapp className="icon" />
        </div>
        <div className="social-icons">
          <FaYoutube />
          <FaTiktok />
          <FaInstagram />
          <FaFacebookF />
          <FaPinterestP />
        </div>
      </div>
      <div className="navbar">
      <div className="logo" id="logo" href="#inicio"></div>
      <nav>
        <ul>
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#nostros">NOSOTROS</a></li>
          <li><a href="#galeria">GALERÍA</a></li>
          <li><a href="#materiales">MATERIALES</a></li>
          <li><a href="#distribuidores">DISTRIBUIDORES</a></li>
          <li><a href="#contacto">CONTACTO</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
