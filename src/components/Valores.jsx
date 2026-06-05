import React from "react";

export default function Valores() {
  const cards = [
    {
      icon: "fa-seedling",
      title: "Espacios naturales",
      description: "Priorizamos propiedades que integran naturaleza, luz y materiales sostenibles en su diseño.",
      delay: "1",
    },
    {
      icon: "fa-handshake",
      title: "Trato personalizado",
      description: "Cada cliente es único. Te acompañamos en cada paso con escucha activa y asesoría a medida.",
      delay: "2",
    },
    {
      icon: "fa-shield-halved",
      title: "Transparencia total",
      description: "Procesos claros, documentación segura y cero sorpresas. Tu tranquilidad es nuestra prioridad.",
      delay: "3",
    },
    {
      icon: "fa-location-dot",
      title: "Ubicaciones únicas",
      description: "Nos especializamos en zonas con carácter propio: Medellín, Eje Cafetero, Caribe y más.",
      delay: "4",
    },
  ];

  return (
    <section className="valores">
      <div className="reveal">
        <div className="section-label">Por qué Terralma</div>
        <h2 className="section-title">
          Más que una agencia,<br />un <em>estilo de vida</em>
        </h2>
        <p className="section-sub">
          Creemos que cada propiedad tiene una energía única. Nuestro trabajo es
          encontrar la que se alinea con la tuya.
        </p>
      </div>
      <div className="valores-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`valor-card reveal reveal-delay-${card.delay}`}
          >
            <div className="valor-icon">
              <i className={`fa-solid ${card.icon}`}></i>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
