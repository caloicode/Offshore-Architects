import { useEffect, useRef, useState } from "react";
import Section from "../Section";
import projectsData from "../../data/projectsGallery.json";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import "photoswipe/style.css";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";

const ProjectsGallerySection = () => {
  const galleryRef = useRef(null);
  const scrollPosition = useRef(0);
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

  useEffect(() => {
    if (!galleryRef.current || Object.keys(imageSizes).length === 0) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryRef.current.id,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      showHideAnimationType: 'fade',
      bgOpacity: 0.9,
      paddingFn: () => ({ top: 30, bottom: 30, left: 70, right: 70 }),
    });

    new PhotoSwipeDynamicCaption(lightbox, {
      type: 'auto',
      mobileLayoutBreakpoint: 640,
      captionContent: '.pswp-caption-content',
    });

    lightbox.on('beforeOpen', () => {
      scrollPosition.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.overflow = 'hidden';
    });

    lightbox.on('close', () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      window.scrollTo({ top: scrollPosition.current });
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, [imageSizes]);

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

      <style jsx global>{`
        .pswp__dynamic-caption--below {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 0 0;
          text-align: center;
        }
        .pswp__dynamic-caption--aside {
          max-width: 300px;
          padding: 20px;
        }
        .pswp__dynamic-caption--mobile {
          background: rgba(0, 0, 0, 0.7);
          padding: 15px;
        }
        .pswp-caption-content h3 {
          color: white;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .pswp-caption-content p {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1rem;
          line-height: 1.5;
        }
      `}</style>
    </Section>
  );
};

export default ProjectsGallerySection;
