import React, { useMemo } from "react";

export default function Hero() {
  // Generate 18 particles dynamically with randomized styles
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map(() => {
      const size = Math.random() * 6 + 3;
      const left = Math.random() * 100;
      const colorPrefix = Math.random() > 0.5 ? "rgba(184,150,90," : "rgba(90,125,94,";
      const opacity = Math.random() * 0.3 + 0.1;
      const duration = Math.random() * 12 + 10;
      const delay = Math.random() * 10;

      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        background: `${colorPrefix}${opacity})`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      };
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      
      {/* Declarative floating particles */}
      <div className="particles" id="particles">
        {particles.map((style, index) => (
          <div key={index} className="particle" style={style} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-tag">
          <i className="fa-solid fa-leaf"></i> Espacios con alma y propósito
        </div>
        <h1>
          <span className="line l1">
            <span className="word">Encuentra el espacio</span>
          </span>
          <span className="line l2">
            <span className="word">que <em>resuena</em></span>
          </span>
          <span className="line l3">
            <span className="word">contigo</span>
          </span>
        </h1>
        <p className="hero-sub">
          Conectamos personas con propiedades que van más allá de las paredes —
          espacios diseñados para vivir con intención, naturaleza y armonía.
        </p>
        <div className="hero-btns">
          <a href="#portafolio" className="btn-primary">
            <i className="fa-solid fa-compass"></i> Explorar propiedades
          </a>
          <a
            href="https://wa.me/573001234567"
            className="btn-outline-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i> Hablar con un asesor
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-n">48<span>+</span></div>
            <div className="hero-stat-l">Clientes felices</div>
          </div>
          <div className="hero-divider"></div>
          <div className="hero-stat">
            <div className="hero-stat-n">120<span>+</span></div>
            <div className="hero-stat-l">Propiedades</div>
          </div>
          <div className="hero-divider"></div>
          <div className="hero-stat">
            <div className="hero-stat-n">5<span>★</span></div>
            <div className="hero-stat-l">Calificación</div>
          </div>
        </div>
      </div>

      <div className="hero-float">
        <div className="hfc tall">
          <div className="p1">
            <span className="ph-icon">🌿</span>
            <div className="prop-label">
              <div className="prop-label-name">Casa Alma Verde</div>
              <div className="prop-label-price">COP 850M</div>
            </div>
          </div>
        </div>
        <div className="hfc">
          <div className="p2">
            <span className="ph-icon" style={{ fontSize: "28px", top: "30%" }}>🍃</span>
            <div className="prop-label">
              <div className="prop-label-name">Apto Bosque</div>
              <div className="prop-label-price">COP 420M</div>
            </div>
          </div>
        </div>
        <div className="hfc">
          <div className="p3">
            <span className="ph-icon" style={{ fontSize: "28px", top: "30%" }}>🌱</span>
            <div className="prop-label">
              <div className="prop-label-name">Loft Jardín</div>
              <div className="prop-label-price">COP 380M</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-badge">
        <div className="hb-dot"></div>
        <div>
          <div className="hb-text">3 nuevas propiedades hoy</div>
          <div className="hb-sub">Medellín · Envigado · Retiro</div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
