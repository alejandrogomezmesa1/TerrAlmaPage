import React from "react";

export default function Ticker() {
  const items = [
    "Casas con jardín",
    "Apartamentos con vista verde",
    "Fincas y retiros",
    "Inversión inmobiliaria",
    "Diseño biofílico",
    "Espacios sostenibles",
    "Medellín · Eje Cafetero · Caribe",
    // Repeated for seamless infinite loop scroll
    "Casas con jardín",
    "Apartamentos con vista verde",
    "Fincas y retiros",
    "Inversión inmobiliaria",
    "Diseño biofílico",
    "Espacios sostenibles",
    "Medellín · Eje Cafetero · Caribe",
  ];

  return (
    <div className="ticker">
      <div className="ticker-track" id="ticker">
        {items.map((text, index) => (
          <span key={index} className="ticker-item">
            {text} <span className="ticker-dot"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
