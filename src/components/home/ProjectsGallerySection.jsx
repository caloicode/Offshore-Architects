import { useEffect, useRef, useState } from "react";
import Section from "../Section";
import projectsData from "../../data/projectsGallery.json";
import { usePhotoSwipeGallery } from "../../hooks/usePhotoswipeGallery.js";

const ProjectsGallerySection = () => {
  const galleryRef = useRef(null);
  const [imageSizes, setImageSizes] = useState({});

  useEffect(() => {
    const fetchImageSizes = async () => {
      const sizes = {};
      await Promise.all(
        projectsData.map((project) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              sizes[project.image] = {
                width: img.naturalWidth,
                height: img.naturalHeight,
              };
              resolve();
            };
            img.src = project.image;
          });
        })
      );
      setImageSizes(sizes);
    };
    fetchImageSizes();
  }, []);

  usePhotoSwipeGallery(galleryRef, imageSizes);

  return (
    <Section
      id="projects-gallery"
      title="Projects Gallery"
      subtitle="A showcase of our remarkable designs and architectural endeavors."
      className="bg-gray-100 dark:bg-gray-700"
    >
      <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
        <div
          id="pswp-gallery"
          ref={galleryRef}
          className="flex gap-4 w-max px-4"
        >
          {projectsData.map((project, index) => {
            const size = imageSizes[project.image];
            return (
              <div key={index} className="flex-shrink-0 w-60">
                <a
                  href={project.image}
                  data-pswp-width={size?.width || 1600}
                  data-pswp-height={size?.height || 900}
                  target="_blank"
                  rel="noreferrer"
                  className="block group"
                >
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow">
                    <img
                      src={project.image}
                      alt={`${project.name} - ${project.description}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="pswp-caption-content hidden">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-base">{project.description}</p>
                  </span>
                  <div className="mt-2 px-1">
                    <h4 className="font-medium text-gray-900 dark:text-white line-clamp-1">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .pswp__bg {
          backdrop-filter: blur(20px) brightness(0.5) !important;
          background-color: rgba(0, 0, 0, 0.85) !important;
        }

        .pswp__dynamic-caption {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.7) !important;
          border-radius: 12px;
          padding: 20px !important;
          max-width: 800px;
          margin: 0 auto 20px !important;
        }

        .pswp__dynamic-caption--mobile {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.8) !important;
          border-radius: 12px;
          padding: 15px !important;
        }

        .pswp-caption-content h3 {
          color: white;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .pswp-caption-content p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          line-height: 1.5;
        }

        /* Prevent scroll jumps */
        html.pswp-open {
          overflow: hidden;
          touch-action: none;
        }
      `}</style>
    </Section>
  );
};

export default ProjectsGallerySection;