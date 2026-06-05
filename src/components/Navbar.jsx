import React, { useEffect, useState } from "react";

export default function Navbar({ view, onBack }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (view === "detail") {
      onBack();
      sessionStorage.setItem("scrollTarget", targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Terralma.co",
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("¡Enlace copiado al portapapeles!");
    }
  };

  const scrollToVisita = () => {
    const el = document.querySelector(".visita-card");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (view === "detail") {
    return (
      <nav id="navbar" className="scrolled" style={{ position: "fixed" }}>
        <button className="nav-back" onClick={onBack}>
          <i className="fa-solid fa-arrow-left"></i> <span>Volver</span>
        </button>
        <a className="nav-logo" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
          terra<span>lma</span>.co
        </a>
        <div className="nav-right">
          <button className="nav-share" title="Compartir" onClick={handleShare}>
            <i className="fa-solid fa-share-nodes"></i>
          </button>
          <button
            className={`nav-fav ${isFavorite ? "active" : ""}`}
            title="Guardar"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
          </button>
          <button className="nav-cta" onClick={scrollToVisita}>
            <i className="fa-solid fa-calendar-check mobile-only-icon"></i>
            <span className="desktop-only-text">Agendar visita</span>
          </button>
        </div>
      </nav>
    );
  }

  return (
    <nav id="navbar" className={`${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "mobile-open" : ""}`}>
      <a className="nav-logo" href="#" onClick={(e) => e.preventDefault()}>
        terra<span>lma</span>.co
      </a>
      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#portafolio" onClick={(e) => handleNavLinkClick(e, "portafolio")}>
            Propiedades
          </a>
        </li>
        <li>
          <a href="#nosotros" onClick={(e) => handleNavLinkClick(e, "nosotros")}>
            Nosotros
          </a>
        </li>
        <li>
          <a href="#testimonios" onClick={(e) => handleNavLinkClick(e, "testimonios")}>
            Testimonios
          </a>
        </li>
        <li>
          <a href="#contacto" className="nav-cta" onClick={(e) => handleNavLinkClick(e, "contacto")}>
            Contáctanos
          </a>
        </li>
      </ul>
      <button className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <i className={isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>
    </nav>
  );
}
