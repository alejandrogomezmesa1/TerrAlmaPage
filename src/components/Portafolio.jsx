import React from "react";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function Portafolio({ onSelectProperty }) {
  const properties = [
    {
      name: "Casa Alma Verde",
      price: "COP 850M",
      location: "El Poblado, Medellín",
      tags: ["4 hab", "320 m²", "Jardín"],
      imgClass: "pi1",
      emoji: "🌳",
      badge: "Destacada",
      delay: "1",
    },
    {
      name: "Apto Bosque Alto",
      price: "COP 480M",
      location: "Envigado, Ant.",
      tags: ["3 hab", "110 m²", "Vista verde"],
      imgClass: "pi2",
      emoji: "🍃",
      badge: "",
      delay: "2",
    },
    {
      name: "Villa Natura",
      price: "COP 1.2B",
      location: "Retiro, Ant.",
      tags: ["5 hab", "520 m²", "Piscina"],
      imgClass: "pi3",
      emoji: "🌿",
      badge: "Nuevo",
      delay: "3",
    },
    {
      name: "Loft Jardín Zen",
      price: "COP 380M",
      location: "Laureles, Medellín",
      tags: ["1 hab", "75 m²", "Terraza"],
      imgClass: "pi4",
      emoji: "🪴",
      badge: "",
      delay: "1",
    },
    {
      name: "Casa Tierra Viva",
      price: "$5.5M/mes",
      location: "Santa Fe de Ant.",
      tags: ["3 hab", "200 m²", "Campo"],
      imgClass: "pi5",
      emoji: "🌲",
      badge: "En arriendo",
      delay: "2",
    },
    {
      name: "Estudio Raíz",
      price: "COP 290M",
      location: "Bello, Ant.",
      tags: ["1 hab", "55 m²", "Nuevo"],
      imgClass: "pi6",
      emoji: "🌱",
      badge: "",
      delay: "3",
    },
  ];

  return (
    <section className="portafolio" id="portafolio">
      <div className="port-header reveal">
        <div>
          <div className="section-label">Propiedades destacadas</div>
          <h2 className="section-title">Espacios que<br /><em>enamoran</em></h2>
        </div>
        <a href="#contacto" className="btn-primary">
          <i className="fa-solid fa-arrow-right"></i> Ver todo el portafolio
        </a>
      </div>
      <div className="port-grid">
        {properties.map((prop, index) => (
          <div
            key={index}
            className={`port-card reveal reveal-delay-${prop.delay}`}
            onClick={() => onSelectProperty?.(slugify(prop.name))}
          >
            <div className="port-img">
              <div className={`${prop.imgClass} port-img-ph`}>{prop.emoji}</div>
              {prop.badge && <div className="port-badge">{prop.badge}</div>}
              <div className="port-overlay">
                <span>Ver propiedad</span>
              </div>
            </div>
            <div className="port-info">
              <div className="port-info-top">
                <span className="port-name">{prop.name}</span>
                <span className="port-price">{prop.price}</span>
              </div>
              <div className="port-loc">
                <i className="fa-solid fa-location-dot"></i> {prop.location}
              </div>
              <div className="port-tags">
                {prop.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="port-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
