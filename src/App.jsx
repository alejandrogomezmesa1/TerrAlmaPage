import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Valores from "./components/Valores";
import Portafolio from "./components/Portafolio";
import Counters from "./components/Counters";
import Nosotros from "./components/Nosotros";
import Testimonios from "./components/Testimonios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import DetallePropiedad from "./components/DetallePropiedad";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState({ name: "home", propertyId: null });

  // Setup Scroll Reveal animation observers after loading/navigation completes
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe elements on the home view
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading, view]);

  // Handle cross-page navigation smooth scroll when returning to home view
  useEffect(() => {
    if (loading) return;

    if (view.name === "home") {
      const pendingTarget = sessionStorage.getItem("scrollTarget");
      if (pendingTarget) {
        sessionStorage.removeItem("scrollTarget");
        setTimeout(() => {
          const el = document.getElementById(pendingTarget);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    }
  }, [loading, view]);

  const selectProperty = (id) => {
    setView({ name: "detail", propertyId: id });
  };

  const goHome = () => {
    setView({ name: "home", propertyId: null });
  };

  return (
    <>
      {/* Dynamic site loader */}
      <Loader onComplete={() => setLoading(false)} />

      {/* Show website content only when active */}
      {!loading && (
        <>
          <CustomCursor />
          
          <Navbar view={view.name} onBack={goHome} />
          
          {view.name === "home" ? (
            <>
              <Hero onSelectProperty={selectProperty} />
              <Ticker />
              <Valores />
              <Portafolio onSelectProperty={selectProperty} />
              <Counters />
              <Nosotros />
              <Testimonios />
              <Contacto />
            </>
          ) : (
            <DetallePropiedad
              propertyId={view.propertyId}
              onBack={goHome}
              onNavigateToProperty={selectProperty}
            />
          )}
          
          <Footer />
        </>
      )}
    </>
  );
}
