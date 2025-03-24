import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import ServicesSection from "../components/ServiceSection";

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      {/* Add more components below */}
    </div>
  );
}

export default App;