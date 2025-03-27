import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TileSection from "../components/TileSection";
import architecturalDesignData from "../data/services/architectural-design.json";

const ArchitecturalDesignPage = () => {
  return (
    <div className="s-wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <header className="s-header">
        <h1 className="s-h1">Architectural Design</h1>
        <p className="s-p">
          Explore our comprehensive design solutions tailored to your needs.
        </p>
      </header>

      {/* Content */}
      <main className="s-main">
        {architecturalDesignData.map((section, idx) => (
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

export default ArchitecturalDesignPage;
