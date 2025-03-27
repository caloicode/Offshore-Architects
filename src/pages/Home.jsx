import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServiceSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ProjectsGallerySection from "../components/ProjectsGallerySection";
import VRTourSection from "../components/VRTourSection";
import WhyClientsLoveUs from "../components/WhyClientsLoveUs";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsGallerySection />
      {/* <VRTourSection /> */}
      <WhyChooseUsSection />
      <WhyClientsLoveUs />
      <Footer />
      {/* Add more components below */}
    </div>
  );
}

export default App;