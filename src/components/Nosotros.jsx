import React from "react";

export default function Nosotros() {
  const items = [
    {
      icon: "fa-eye",
      title: "Visión holística",
      description: "Analizamos cada propiedad desde su entorno, energía y potencial — no solo sus metros cuadrados.",
    },
    {
      icon: "fa-heart",
      title: "Conexión real",
      description: "La propiedad correcta no se busca, se siente. Nuestro proceso parte de entender quién eres tú.",
    },
    {
      icon: "fa-tree",
      title: "Espacios sostenibles",
      description: "Priorizamos propiedades con integración natural, construcción responsable y diseño biofílico.",
    },
    {
      icon: "fa-bolt",
      title: "Proceso ágil y seguro",
      description: "Desde la primera visita hasta la escritura pública, te guiamos con claridad y total transparencia.",
    },
  ];

  return (
    <section className="why" id="nosotros">
      <div className="why-orb why-orb1"></div>
      <div className="why-orb why-orb2"></div>
      
      <div className="reveal">
        <div className="section-label">Sobre nosotros</div>
        <h2 className="section-title">
          Conectamos personas con<br />espacios que <em>tienen alma</em>
        </h2>
        <p className="section-sub">
          Somos un equipo apasionado por el bienestar, la arquitectura
          consciente y los espacios que transforman vidas.
        </p>
      </div>

      <div className="why-content">
        <div className="why-visual reveal-left">
          <div className="why-visual-icon">🌿</div>
          <div className="why-visual-text">
            <div className="wvt-big">Terralma</div>
            <div className="wvt-sub">Medellín · Desde 2020</div>
          </div>
          <div className="why-visual-badge">
            <div className="wvb-icon">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <div className="wvb-title">Top Agencia Inmobiliaria</div>
              <div className="wvb-sub">Antioquia 2024 — Metrocuadrado</div>
            </div>
          </div>
        </div>

        <div className="why-list reveal-right">
          {items.map((item, index) => (
            <div key={index} className="why-item">
              <div className="why-dot">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
