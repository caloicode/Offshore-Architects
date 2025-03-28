import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import "photoswipe/style.css";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";

export const usePhotoSwipeGallery = (galleryRef, imageSizes) => {
  useEffect(() => {
    if (!galleryRef.current || Object.keys(imageSizes).length === 0) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryRef.current.id,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      showHideAnimationType: 'fade',
      bgOpacity: 0.8, // Increased opacity for darker background
      paddingFn: (viewportSize) =>
        viewportSize.x < 640
          ? { top: 20, bottom: 20, left: 10, right: 10 }
          : { top: 30, bottom: 30, left: 70, right: 70 },
    });

    new PhotoSwipeDynamicCaption(lightbox, {
      type: 'auto',
      mobileLayoutBreakpoint: 640,
      captionContent: '.pswp-caption-content',
    });

    // Remove all scroll manipulation
    lightbox.on('init', () => {
      lightbox.pswp.on('close', () => {
        // Focus trap cleanup if needed
        document.activeElement?.blur();
      });
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, [galleryRef, imageSizes]);
};