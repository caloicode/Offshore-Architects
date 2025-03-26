import { useState } from 'react';
import DayNightSwitch from './DayNightSwitch';

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
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      {/* Content */}
      <div className="text-center text-white bg-black/50 p-8 rounded-lg max-w-4xl mx-4">
        <h1 className="text-5xl font-bold mb-4">
          Offshore Architecture & Visualization
        </h1>
        <p className="text-xl mb-8">
          By AnthonyB
        </p>
        <button className="btn-primary hover:scale-105 transition-transform">
          Request a Quote
        </button>
      </div>

      {/* Day/Night Toggle Switch - Bottom Left */}
      <div className="absolute bottom-4 left-4">
        <DayNightSwitch 
          isNightMode={isNightMode} 
          toggle={toggleBackground} 
        />
      </div>
    </section>
  );
};

export default HeroSection;