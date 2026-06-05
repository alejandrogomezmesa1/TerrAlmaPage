import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0; // Mouse coordinates
    let rx = 0, ry = 0; // Ring coordinates
    let isMoving = false;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      isMoving = true;

      // Update pointer cursor immediately
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx - 5}px`;
        cursorRef.current.style.top = `${my - 5}px`;
      }
    };

    // Interpolated animation loop for the outer ring
    let frameId;
    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${rx - 19}px`;
        ringRef.current.style.top = `${ry - 19}px`;
      }

      frameId = requestAnimationFrame(animRing);
    };

    // Hover detection via event delegation
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target &&
        typeof target.closest === "function" &&
        target.closest("a, button, .port-card, .valor-card, .why-item")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    frameId = requestAnimationFrame(animRing);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        ref={cursorRef}
        className={isHovered ? "hover" : ""}
      />
      <div
        id="cursor-ring"
        ref={ringRef}
        className={isHovered ? "hover" : ""}
      />
    </>
  );
}
