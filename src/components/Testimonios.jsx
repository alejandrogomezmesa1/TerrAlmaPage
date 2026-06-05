import React from "react";

export default function Testimonios() {
  const testimonials = [
    {
      stars: "★★★★★",
      quote: "Terralma no solo nos encontró una casa, nos encontró un hogar. Entendieron exactamente lo que buscábamos: luz, naturaleza y tranquilidad.",
      avatar: "CR",
      name: "Camila Restrepo",
      role: "Compradora · El Poblado",
      delay: "1",
    },
    {
      stars: "★★★★★",
      quote: "En menos de 60 días cerramos la compra de nuestra villa en Retiro. Profesionalismo y calidez humana en cada paso del proceso.",
      avatar: "JM",
      name: "Jorge Martínez",
      role: "Comprador · Retiro, Ant.",
      delay: "2",
    },
    {
      stars: "★★★★★",
      quote: "Como inversionista valoro la honestidad. Terralma me dio información real sin promesas vacías. Ya voy en mi tercera propiedad con ellos.",
      avatar: "SV",
      name: "Sofía Vargas",
      role: "Inversionista · Bogotá",
      delay: "3",
    },
  ];

  return (
    <section className="testimonios" id="testimonios">
      <div className="reveal">
        <div className="section-label">Lo dicen nuestros clientes</div>
        <h2 className="section-title">
          Historias que nos<br /><em>llenan de orgullo</em>
        </h2>
      </div>
      <div className="test-grid">
        {testimonials.map((test, index) => (
          <div
            key={index}
            className={`test-card reveal reveal-delay-${test.delay}`}
          >
            <div className="test-mark">"</div>
            <div className="test-stars">{test.stars}</div>
            <p className="test-quote">{test.quote}</p>
            <div className="test-author">
              <div className="test-avatar">{test.avatar}</div>
              <div>
                <div className="test-name">{test.name}</div>
                <div className="test-role">{test.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
