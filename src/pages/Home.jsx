import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServiceSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ProjectsGallerySection from "../components/ProjectsGallerySection";
import WhyClientsLoveUs from "../components/WhyClientsLoveUs";

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsGallerySection />
      <WhyChooseUsSection />
      <WhyClientsLoveUs />
      {/* Add more components below */}
    </div>
  );
}

export default App;