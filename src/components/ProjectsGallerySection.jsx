import { useRef, useEffect } from "react";
import Section from "./Section";
import projectsData from "../data/projectsGallery.json";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";

const ProjectsGallerySection = () => {
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleOpen = () => {
      scrollPosition.current = window.scrollY || document.documentElement.scrollTop;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'relative';
      document.body.style.top = `0`;
    };

    const handleClose = () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';

      window.scrollTo({ top: scrollPosition.current, left: 0 });
    };

    document.addEventListener('lgAfterOpen', handleOpen);
    document.addEventListener('lgAfterClose', handleClose);

    return () => {
      document.removeEventListener('lgAfterOpen', handleOpen);
      document.removeEventListener('lgAfterClose', handleClose);
    };
  }, []);

  return (
    <Section
      id="projects-gallery"
      title="Projects Gallery"
      subtitle="A showcase of our remarkable designs and architectural endeavors."
      className="bg-gray-100 dark:bg-gray-700"
    >
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          elementClassNames="flex flex-wrap content-start gap-4 min-w-max"
          mode="lg-fade"
          closable={true}
          backdropDuration={500}
          container="body"
          onAfterOpen={() => {
            const event = new Event('lgAfterOpen');
            document.dispatchEvent(event);
          }}
          onAfterClose={() => {
            const event = new Event('lgAfterClose');
            document.dispatchEvent(event);
          }}
        >
          {projectsData.map((project, index) => (
            <a
              key={index}
              href={project.image}
              data-sub-html={`<h4>${project.name}</h4><p>${project.description}</p>`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-60 h-40 object-cover cursor-pointer rounded-lg shadow hover:scale-105 transition-transform flex-shrink-0"
              />
            </a>
          ))}
        </LightGallery>
      </div>

      <style jsx global>{`
        .lg-backdrop {
          background-color: rgba(0, 0, 0, 0.6) !important;
          backdrop-filter: blur(8px) !important;
        }
        .lg-outer {
          position: fixed !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
        }
        .lg-toolbar .lg-download, 
        .lg-toolbar .lg-zoom-in, 
        .lg-toolbar .lg-zoom-out, 
        .lg-toolbar .lg-actual-size {
          display: none !important;
        }
        .lg-toolbar .lg-close {
          top: 10px !important;
          right: 10px !important;
          z-index: 10000 !important;
          background-color: rgba(0,0,0,0.4) !important;
          border-radius: 50% !important;
          padding: 5px !important;
        }
      `}</style>
    </Section>
  );
};

export default ProjectsGallerySection;
