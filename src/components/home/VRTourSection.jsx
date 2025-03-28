import React, { useState } from "react";
import Section from "../Section";
import Loader from "../Loader"; // Make sure this path is correct

const VRTourSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Section
      id="vr-tour"
      title="Virtual Reality Tour"
      subtitle="Explore our sample VR tour in 360 degrees."
      className="bg-white dark:bg-gray-800"
    >
      <div className="mt-8 relative w-full h-[400px]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 z-10">
            <Loader />
          </div>
        )}
        <iframe
          src="https://app.lapentor.com/sphere/ground-floor-1738958347"
          width="100%"
          height="400px"
          allow="fullscreen; vr"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          className={`transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        ></iframe>
      </div>
    </Section>
  );
};

export default VRTourSection;
