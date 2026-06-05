import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
      <div className="nav-logo">
        terra<span>lma</span>.co
      </div>
      <ul class="nav-links">
        <li>
          <a href="#portafolio">Propiedades</a>
        </li>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
        <li>
          <a href="#testimonios">Testimonios</a>
        </li>
        <li>
          <a href="#contacto" className="nav-cta">
            Contáctanos
          </a>
        </li>
      </ul>
    </nav>
  );
}
