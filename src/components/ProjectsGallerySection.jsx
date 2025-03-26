// ProjectsGallerySection.jsx
import { useState, useEffect } from "react";
import Section from "./Section";
import projectsData from "../data/projectsGallery.json";

const ProjectsGallerySection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <Section
      id="projects-gallery"
      title="Projects Gallery"
      subtitle="A showcase of our remarkable designs and architectural endeavors."
      className="bg-gray-100 dark:bg-gray-700"
    >
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div
          className="flex flex-wrap content-start gap-4"
          style={{ minWidth: "max-content", height: "auto" }}
        >
          {projectsData.map((project, index) => (
            <img
              key={index}
              src={project.image}
              alt={project.name}
              onClick={() => setSelectedProject(project)}
              className="w-60 h-40 object-cover cursor-pointer rounded-lg shadow hover:scale-105 transition-transform flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={() => setSelectedProject(null)}
          >
            &times;
          </button>
          <div className="max-w-5xl w-full mx-auto p-4 flex flex-col items-center">
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="max-h-[80vh] object-contain mb-4"
            />
            <h3 className="text-3xl text-white font-bold mb-2">
              {selectedProject.name}
            </h3>
            <p className="text-gray-300 max-w-3xl text-center">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
};

export default ProjectsGallerySection;
