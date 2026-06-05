import React, { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Wait 2 seconds, then start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Wait another 800ms (duration of transition) to hide/complete
    const completeTimer = setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      id="loader"
      style={{
        transition: "opacity 0.8s, transform 0.8s",
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="loader-logo">
        terra<span>lma</span>.co
      </div>
      <div className="loader-sub">Espacios con alma y propósito</div>
      <div className="loader-bar">
        <div className="loader-fill"></div>
      </div>
    </div>
  );
}
