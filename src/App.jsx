import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArchitecturalDesignPage from "./pages/Architetural-Design";
import AnimationPage from "./pages/Animations";
import ArchiteturalRenderingPage from "./pages/Architetural-Rendering";
import FloorPlan3DPage from "./pages/FloorPlan3D";
import VirtualTour360Page from "./pages/VirtualTour360";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/services/architectural-design" element={<ArchitecturalDesignPage />} />
          <Route path="/services/3d-animation" element={<AnimationPage />} />
          <Route path="/services/architectural-rendering" element={<ArchiteturalRenderingPage />} />
          <Route path="/services/3d-floor-plan" element={<FloorPlan3DPage />} />
          <Route path="/services/360-virtual-tour" element={<VirtualTour360Page />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
