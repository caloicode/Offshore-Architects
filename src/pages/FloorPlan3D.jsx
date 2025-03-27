import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TileSection from "../components/TileSection";
import floorPlan3DData from "../data/services/3d-floor-plan.json";

const FloorPlan3DPage = () => {
  return (
    <div className="s-wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <header className="s-header">
        <h1 className="s-h1">3D Floor Plan</h1>
        <p className="s-p">
          Explore our comprehensive design solutions tailored to your needs.
        </p>
      </header>

      {/* Content */}
      <main className="s-main">
        {floorPlan3DData.map((section, idx) => (
          <TileSection
            key={idx}
            id={section.link} // 🔗 ID from JSON
            title={section.title}
            description={section.description}
            tiles={section.tiles}
          />
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FloorPlan3DPage;
