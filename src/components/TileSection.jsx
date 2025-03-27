import { useEffect, useRef, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import "photoswipe/style.css";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";

const TileSection = ({ id, title, description, tiles }) => {
  const galleryRef = useRef(null);
  const scrollPosition = useRef(0);
  const [imageSizes, setImageSizes] = useState({});

  const galleryId = `gallery-${title.toLowerCase().replace(/[^a-z0-9-]/g, "-")}`;

  useEffect(() => {
    const fetchImageSizes = async () => {
      const sizes = {};
      await Promise.all(
        tiles.map((tile) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              sizes[tile.imageLink] = {
                width: img.naturalWidth,
                height: img.naturalHeight,
              };
              resolve();
            };
            img.src = tile.imageLink;
          });
        })
      );
      setImageSizes(sizes);
    };
    fetchImageSizes();
  }, [tiles]);

  useEffect(() => {
    if (!galleryRef.current || Object.keys(imageSizes).length === 0) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: "a",
      pswpModule: () => import("photoswipe"),
      showHideAnimationType: "fade",
      bgOpacity: 0.9,
      paddingFn: (viewportSize) => {
        return viewportSize.x < 640
          ? { top: 20, bottom: 20, left: 10, right: 10 }
          : { top: 30, bottom: 30, left: 70, right: 70 };
      },
    });

    new PhotoSwipeDynamicCaption(lightbox, {
      type: "auto",
      mobileLayoutBreakpoint: 640,
      captionContent: ".pswp-caption-content",
    });

    lightbox.on("beforeOpen", () => {
      scrollPosition.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.overflow = "hidden";
    });

    lightbox.on("close", () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollPosition.current });
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, [imageSizes, galleryId]);

  return (
    <section className="py-1 px-4 max-w-6xl mx-auto">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-10">
        {/* Header */}
        <div id={id} className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 scroll-mt-24">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        {/* Gallery */}
        <div
          id={galleryId}
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {tiles.map((tile, index) => {
            const size = imageSizes[tile.imageLink];
            return (
              <div key={index} className="p-2">
                <a
                  href={tile.imageLink}
                  data-pswp-width={size?.width || 1600}
                  data-pswp-height={size?.height || 900}
                  target="_blank"
                  rel="noreferrer"
                  className="block group"
                >
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow">
                    <img
                      src={tile.imageLink}
                      alt={tile.imageTitle}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* Hidden caption for PhotoSwipe */}
                  <span className="pswp-caption-content hidden">
                    <h3 className="text-xl font-bold mb-2">{tile.imageTitle}</h3>
                    <p className="text-base">{tile.imageCaption}</p>
                  </span>
                  {/* Preview caption under tile */}
                  <div className="mt-2 px-1">
                    <h4 className="font-medium text-gray-900 dark:text-white line-clamp-1">
                      {tile.imageTitle}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {tile.imageCaption}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* PhotoSwipe Custom Styles */}
      <style>{`
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
    </section>
  );
};

export default TileSection;
