import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServiceSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import ProjectsGallerySection from "../components/home/ProjectsGallerySection";
import VRTourSection from "../components/home/VRTourSection";
import WhyClientsLoveUs from "../components/home/WhyClientsLoveUs";
import Footer from "../components/Footer";

function App() {
  return (
    <PageWrapper>
      <div className="dark:bg-gray-900">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ProjectsGallerySection />
        {/* <VRTourSection /> */}
        <WhyChooseUsSection />
        <WhyClientsLoveUs />
        <Footer />
      </div>
    </PageWrapper>
  );
}

export default App;
