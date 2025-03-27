import Section from "../Section";

const VRTourSection = () => {
  return (
    <Section
      id="vr-tour"
      title="Virtual Reality Tour"
      subtitle="Explore our sample VR tour in 360 degrees."
      className="bg-white dark:bg-gray-800"
    >
      <div className="mt-8">
        <iframe
          src="https://app.lapentor.com/sphere/company-sample-booth"
          frameBorder="0"
          width="100%"
          height="400px"
          scrolling="no"
          allow="vr,gyroscope,accelerometer"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          oallowfullscreen="true"
          msallowfullscreen="true"
        ></iframe>
      </div>
    </Section>
  );
};

export default VRTourSection;
