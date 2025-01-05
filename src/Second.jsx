import React, { useEffect, useState } from "react";

const Second = () => {
  const [fadeIn, setFadeIn] = useState([false, false, false, false]);

  useEffect(() => {
    const timers = fadeIn.map((_, index) =>
      setTimeout(() => {
        setFadeIn((prev) => {
          const newFadeIn = [...prev];
          newFadeIn[index] = true;
          return newFadeIn;
        });
      }, index * 500) // 500ms delay between each fade-in
    );

    // Cleanup timeouts on component unmount
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dots2 relative overflow-hidden">
      <img
        src="./images/second-love.png"
        alt="love"
        className={`absolute z-10 transition-opacity duration-1000 transform ${
          fadeIn[0] ? "opacity-100 animate-float" : "opacity-0"
        }`}
      />
      <img
        src="./images/second-stars.png"
        alt="stars"
        className={`absolute z-10 transition-opacity duration-1000 transform ${
          fadeIn[1] ? "opacity-100 animate-float" : "opacity-0"
        }`}
      />
      <img
        src="./images/first-date.png"
        alt="first-date"
        className={`w-72 pt-11 transition-opacity duration-1000 transform ${
          fadeIn[2] ? "opacity-100 animate-float" : "opacity-0"
        }`}
      />
      <img
        src="./images/special-date.png"
        alt="paper"
        className={`w-72 pt-11 transition-opacity duration-1000 transform ${
          fadeIn[3] ? "opacity-100 animate-float" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Second;
