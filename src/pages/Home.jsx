import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection.jsx"
import ServicesSection from "../components/home/ServiceSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import ProjectsGallerySection from "../components/home/ProjectsGallerySection";
import VRTourSection from "../components/home/VRTourSection";
import WhyClientsLoveUs from "../components/home/WhyClientsLoveUs";
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