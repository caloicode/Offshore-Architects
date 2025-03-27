import Section from "../Section";
import Carousel from "./Carousel";
import servicesData from "../../data/services.json";

const ServicesSection = () => {
  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Tailored Architectural Visualization Services for Every Need."
      className="bg-gray-100 dark:bg-gray-700"
    >
      <Carousel data={servicesData} />
    </Section>
  );
};

export default ServicesSection;
