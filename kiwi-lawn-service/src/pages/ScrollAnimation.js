import React, { useEffect, useRef, useState } from "react";

const ScrollAnimation = () => {
  const pathRef = useRef(null);
  const mowerRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  // Set initial position for the mower to be lower down
  const initialPosition = 200; // Initial y position

  useEffect(() => {
    // Once the SVG mounts, measure the path length
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      // Set up dash array and offset so the path is hidden initially
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / docHeight;

      // Calculate how much of the path should be visible
      if (pathRef.current) {
        const drawLength = pathLength * scrollFraction;
        pathRef.current.style.strokeDashoffset = pathLength - drawLength;
      }

      // Position the lawn mower image at the tip of the revealed path
      if (mowerRef.current && pathRef.current) {
        const point = pathRef.current.getPointAtLength(pathLength * scrollFraction);
        // Offset the mower so that it centers on the path tip (assuming 40x40 size)
        mowerRef.current.setAttribute("x", point.x - 20);
        mowerRef.current.setAttribute("y", point.y - 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call it initially to update if page is loaded with a scroll offset
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLength]);

  return (
    <svg
      className="scroll-svg"
      viewBox="0 0 600 700"
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "700px",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      <defs>
        {/* Define a simple pattern to mimic the “grass cut-ups” look */}
        <pattern id="grassPattern" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="none" />
          <path d="M0,5 L10,5" stroke="#28a745" strokeWidth="2" />
          <path d="M5,0 L5,10" stroke="#28a745" strokeWidth="2" />
        </pattern>
      </defs>
      {/* The S‑river path */}
      <path
        ref={pathRef}
        d="M300,50 C300,150 100,250 100,350 S300,550 300,650"
        fill="none"
        stroke="url(#grassPattern)"
        strokeWidth="8"
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
      />
      {/* Lawn mower image moving along the path */}
      <image
        ref={mowerRef}
        href="/images/green-lawn-mower.png"
        width="40"
        height="40"
        x="290" // initial position (will be updated on scroll)
        y={initialPosition} // Use the initial position instead of hardcoded value
      />
    </svg>
  );
};

export default ScrollAnimation;
