import React, { useRef, useEffect, useState } from "react";

const RadialProgress = () => {
  const progressRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          } else {
            setIsIntersecting(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(progressRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const targetValue = 70;
      const duration = 1000; // milliseconds
      const interval = 10; // milliseconds

      let startValue = 0;
      let currentTime = 0;

      const increment = () => {
        currentTime += interval;
        const progress = easeOutQuad(
          currentTime,
          startValue,
          targetValue - startValue,
          duration
        );
        setValue(Math.round(progress));

        if (currentTime < duration) {
          setTimeout(increment, interval);
        }
      };

      setTimeout(increment, interval);
    } else {
      setValue(0); // Reset value when not intersecting
    }
  }, [isIntersecting]);

  // Easing function for smooth animation
  const easeOutQuad = (t, b, c, d) => {
    t /= d;
    return -c * t * (t - 2) + b;
  };

  return (
    <div
      ref={progressRef}
      className="radial-progress"
      style={{
        "--value": `${value}`,
        "--size": "12rem",
        "--thickness": "1rem",
      }}
    >
      <span className="text-4xl">{value}%</span>
    </div>
  );
};

export default RadialProgress;
