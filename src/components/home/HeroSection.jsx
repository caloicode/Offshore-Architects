import { useState } from 'react';

const CustomDayNightSwitch = ({ isNightMode, toggle }) => {
  const styles = {
    switch: {
      fontSize: '17px',
      position: 'relative',
      display: 'inline-block',
      width: '3.5em',
      height: '2em'
    },
    switchInput: {
      opacity: 0,
      width: 0,
      height: 0
    },
    slider: {
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgb(75, 73, 74)',
      transition: '0.4s',
      borderRadius: '30px'
    },
    sliderBefore: {
      position: 'absolute',
      content: '""',
      height: '1.4em',
      width: '1.4em',
      borderRadius: '20px',
      left: '0.3em',
      bottom: '0.3em',
      backgroundColor: 'black',
      boxShadow: 'inset 8px -4px 0 0 white',
      transition: '0.4s'
    },
    checkedSlider: {
      backgroundColor: '#2196f3'
    },
    checkedSliderBefore: {
      transform: 'translateX(1.5em)',
      backgroundColor: 'yellow',
      boxShadow: 'none'
    }
  };

  return (
    <label style={styles.switch}>
      <input 
        type="checkbox" 
        checked={isNightMode} 
        onChange={toggle} 
        style={styles.switchInput} 
      />
      <span style={{
        ...styles.slider,
        ...(isNightMode ? styles.checkedSlider : {})
      }}>
        <span style={{
          ...styles.sliderBefore,
          ...(isNightMode ? styles.checkedSliderBefore : {})
        }}></span>
      </span>
    </label>
  );
};

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
      {/* Day/Night Toggle Switch - Top Left with margin */}
      <div className="absolute top-20 left-4 z-10">
        <CustomDayNightSwitch
          isNightMode={isNightMode}
          toggle={toggleBackground}
        />
      </div>

      {/* Content */}
      <div className="text-center text-white bg-black/50 p-8 rounded-lg max-w-4xl mx-4">
        <h1 className="text-5xl font-bold mb-4">
          Offshore Architecture & Visualization
        </h1>
        <p className="text-xl mb-8">By AnthonyB</p>
        <button className="btn-primary hover:scale-105 transition-transform">
          Request a Quote
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
