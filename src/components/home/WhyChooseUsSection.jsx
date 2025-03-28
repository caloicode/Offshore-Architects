import Section from "../Section";
import whyChooseUsData from "../../data/whyChooseUs.json";

const WhyChooseUsSection = () => {
  return (
    <Section
      id="why-choose-us"
      title="Why Choose Us"
      subtitle="We deliver value beyond design — crafting exceptional solutions tailored to you."
      className="bg-white dark:bg-gray-800"
    >
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {whyChooseUsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-xl p-6 shadow hover:scale-105 transition-transform"
          >
            <div className="w-[38px] h-[38px] flex-shrink-0 mr-6 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUsSection;
