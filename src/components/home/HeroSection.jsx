import { useState } from "react";
import DayNightSwitch from "./DayNightSwitch";

const HeroSection = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleBackground = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: isNightMode
          ? 'url("/images/night.jpg")'
          : 'url("/images/day.jpg")',
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Day/Night Toggle Switch - Top Left with margin */}
      <div className="absolute top-20 left-4 z-10">
        <DayNightSwitch isNightMode={isNightMode} toggle={toggleBackground} />
      </div>

      {/* Content */}
      {/* <div className="text-center text-white bg-white/10 backdrop-blur-[2px] p-8 rounded-lg max-w-4xl mx-4 border border-white/20"> */}
      <div className="text-center text-white bg-black/30 backdrop-blur-[2px] p-8 rounded-lg max-w-4xl mx-4 border border-white/20">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Offshore Architecture & Visualization
        </h1>
        <p className="text-lg sm:text-xl mb-2">By AnthonyB</p>
        <p className="text-sm sm:text-base text-white/90">
          Transform your vision into reality with cutting-edge 3D rendering and architectural design that captivates, communicates, and inspires.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
