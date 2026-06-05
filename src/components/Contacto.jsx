import React, { useState } from "react";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    busqueda: "Comprar una propiedad",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trigger submit animation state
    setSubmitted(true);

    // Reset submit animation state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contacto" id="contacto">
      <div className="reveal">
        <div className="section-label">Hablemos</div>
        <h2 className="section-title">
          ¿Listo para encontrar<br />tu espacio <em>ideal</em>?
        </h2>
      </div>
      <div className="contact-wrap">
        <div className="contact-info reveal-left">
          <h3>Estamos aquí para acompañarte</h3>
          <p>
            Escríbenos por WhatsApp para una respuesta inmediata, o déjanos tus
            datos y te contactamos en menos de 2 horas.
          </p>
          <div className="contact-channels">
            <a
              href="https://wa.me/573001234567"
              className="contact-channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cc-icon cc-wa">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="cc-text">
                <div className="cc-label">WhatsApp Business</div>
                <div className="cc-val">+57 300 123 4567 · Respuesta inmediata</div>
              </div>
              <i className="fa-solid fa-arrow-right cc-arrow"></i>
            </a>
            <a
              href="https://instagram.com/terralma.co"
              className="contact-channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cc-icon cc-ig">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="cc-text">
                <div className="cc-label">Instagram</div>
                <div className="cc-val">@terralma.co · DM abierto</div>
              </div>
              <i className="fa-solid fa-arrow-right cc-arrow"></i>
            </a>
            <a href="mailto:hola@terralma.co" className="contact-channel">
              <div className="cc-icon cc-mail">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="cc-text">
                <div className="cc-label">Correo electrónico</div>
                <div className="cc-val">hola@terralma.co</div>
              </div>
              <i className="fa-solid fa-arrow-right cc-arrow"></i>
            </a>
          </div>
        </div>
        <div className="reveal-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="+57 300 ..."
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="correo"
                placeholder="tu@correo.com"
                value={formData.correo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>¿Qué buscas?</label>
              <select
                name="busqueda"
                value={formData.busqueda}
                onChange={handleInputChange}
              >
                <option value="Comprar una propiedad">Comprar una propiedad</option>
                <option value="Arrendar una propiedad">Arrendar una propiedad</option>
                <option value="Vender mi propiedad">Vender mi propiedad</option>
                <option value="Asesoría de inversión">Asesoría de inversión</option>
              </select>
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                placeholder="Cuéntanos qué espacio sueñas encontrar…"
                value={formData.mensaje}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-submit"
              id="submitBtn"
              style={{ backgroundColor: submitted ? "#3D5A40" : "" }}
            >
              {submitted ? (
                <>
                  <i className="fa-solid fa-check"></i> ¡Mensaje enviado!
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane"></i> Enviar mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
