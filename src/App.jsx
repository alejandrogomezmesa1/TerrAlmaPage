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

export default function App() {
  const [loading, setLoading] = useState(true);

  // Setup Scroll Reveal animation observers after loading completes
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

    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      {/* Dynamic site loader */}
      <Loader onComplete={() => setLoading(false)} />

      {/* Show website content only when active */}
      {!loading && (
        <>
          <CustomCursor />
          <Navbar />
          <Hero />
          <Ticker />
          <Valores />
          <Portafolio />
          <Counters />
          <Nosotros />
          <Testimonios />
          <Contacto />
          <Footer />
        </>
      )}
    </>
  );
}
