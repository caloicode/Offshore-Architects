import { useEffect, useRef, useState } from "react";
import Section from "../Section";
import projectsData from "../../data/projectsGallery.json";
import { usePhotoSwipeGallery } from "../../hooks/usePhotoswipeGallery.js";

const ProjectsGallerySection = () => {
  const galleryRef = useRef(null);
  const [imageSizes, setImageSizes] = useState({});
  const [showBlurLayer, setShowBlurLayer] = useState(false);
  const blurLayerRef = useRef(null);

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

  useEffect(() => {
    const handleBeforeOpen = () => {
      // Create screenshot of current view for blur effect
      setShowBlurLayer(true);
    };

    const handleAfterInit = () => {
      // Ensure blur layer is behind PhotoSwipe (z-index management)
      if (blurLayerRef.current) {
        blurLayerRef.current.style.zIndex = '1499';
      }
    };

    const handleClose = () => {
      setShowBlurLayer(false);
    };

    document.addEventListener('pswpBeforeOpen', handleBeforeOpen);
    document.addEventListener('pswpAfterInit', handleAfterInit);
    document.addEventListener('pswpClose', handleClose);

    return () => {
      document.removeEventListener('pswpBeforeOpen', handleBeforeOpen);
      document.removeEventListener('pswpAfterInit', handleAfterInit);
      document.removeEventListener('pswpClose', handleClose);
    };
  }, []);

  return (
    <Section
      id="projects-gallery"
      title="Projects Gallery"
      subtitle="A showcase of our remarkable designs and architectural endeavors."
      className="bg-gray-100 dark:bg-gray-700 relative"
    >
      {/* Blur layer that sits behind PhotoSwipe */}
      {showBlurLayer && (
        <div 
          ref={blurLayerRef}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          style={{
            zIndex: 1499, // Just below PhotoSwipe (which uses 1500+)
            pointerEvents: 'none' // Allow clicks to pass through
          }}
        />
      )}

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
        /* PhotoSwipe overrides */
        .pswp {
          --pswp-bg: transparent !important;
          z-index: 1500 !important;
        }

        .pswp__bg {
          background: transparent !important;
        }

        /* Caption styling */
        .pswp__dynamic-caption {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 12px;
          padding: 20px !important;
        }

        /* UI Elements */
        .pswp__button {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        /* Scroll prevention */
        html.pswp-open {
          overflow: hidden !important;
        }
      `}</style>
    </Section>
  );
};

export default ProjectsGallerySection;