import React, { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1600; // Total animation duration in ms
    const stepTime = 16; // Frame step time (60fps)
    const step = (target / duration) * stepTime;

    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setValue(current);
      if (current >= target) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, target]);

  const isFloat = target % 1 !== 0;
  const displayVal = isFloat ? value.toFixed(1) : Math.floor(value);

  return (
    <div className="counter-num">
      {displayVal}
      <span>{suffix}</span>
    </div>
  );
}

export default function Counters() {
  const stripRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.3 }
    );

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const counterData = [
    { target: 48, suffix: "+", label: "Clientes satisfechos", delay: "1" },
    { target: 120, suffix: "+", label: "Propiedades vendidas", delay: "2" },
    { target: 5, suffix: "★", label: "Calificación promedio", delay: "3" },
    { target: 4, suffix: " años", label: "De experiencia", delay: "4" },
  ];

  return (
    <div className="counter-strip" ref={stripRef}>
      {counterData.map((data, index) => (
        <div
          key={index}
          className={`counter-item reveal reveal-delay-${data.delay}`}
        >
          <AnimatedCounter
            target={data.target}
            suffix={data.suffix}
            start={startCounting}
          />
          <div className="counter-label">{data.label}</div>
        </div>
      ))}
    </div>
  );
}
