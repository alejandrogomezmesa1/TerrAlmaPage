import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            terra<span>lma</span>.co
          </div>
          <p className="footer-desc">
            Conectamos personas con espacios que tienen alma y propósito.
            Marketing inmobiliario con corazón, desde Medellín para Colombia.
          </p>
          <div className="footer-social">
            <a
              href="https://instagram.com/terralma.co"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/573001234567"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" className="social-btn">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="social-btn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="social-btn">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Propiedades</h4>
          <ul>
            <li>
              <a href="#">Casas</a>
            </li>
            <li>
              <a href="#">Apartamentos</a>
            </li>
            <li>
              <a href="#">Fincas</a>
            </li>
            <li>
              <a href="#">Lofts</a>
            </li>
            <li>
              <a href="#">Inversión</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Proceso</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Prensa</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="#">+57 300 123 4567</a>
            </li>
            <li>
              <a href="#">hola@terralma.co</a>
            </li>
            <li>
              <a href="#">Medellín, Colombia</a>
            </li>
            <li>
              <a href="#">Lun–Vie 8am–6pm</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">
          © 2025 Terralma.co <span className="footer-dot">·</span> Todos los
          derechos reservados
        </p>
        <p className="footer-copy">
          Diseñado con <span className="footer-dot">♥</span> en Medellín
        </p>
      </div>
    </footer>
  );
}
