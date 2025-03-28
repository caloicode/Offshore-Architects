import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TileSection from "../components/TileSection";
import architecturalRenderingData from "../data/services/architectural-rendering.json";

const ArchiteturalRenderingPage = () => {
  return (
    <PageWrapper>
      <div className="s-wrapper">
        {/* Navbar */}
        <Navbar />

        {/* Page Header */}
        <header className="s-header">
          <h1 className="s-h1">Architectural Rendering</h1>
          <p className="s-p">
            Explore our comprehensive design solutions tailored to your needs.
          </p>
        </header>

        {/* Content */}
        <main className="s-main">
          {architecturalRenderingData.map((section, idx) => (
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
    </PageWrapper>
  );
};

export default ArchiteturalRenderingPage;
