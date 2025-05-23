import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactoFlotante = () => {
  return (
    <div className="contacto-flotante">
      <a href="https://wa.me/524491250958" target="_blank" rel="noopener noreferrer" title="WhatsApp">
        <FaWhatsapp />
      </a>
      <a href="tel:4491250958" title="Llamar">
        <FaPhoneAlt />
      </a>
      <a href="mailto:admin@deckdepot.mx" title="Correo">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default ContactoFlotante;
