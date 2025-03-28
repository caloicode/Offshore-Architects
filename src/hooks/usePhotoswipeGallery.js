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
      bgOpacity: 0, // Set to 0 since we'll handle background separately
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

    // Dispatch custom events for blur layer control
    lightbox.on('beforeOpen', () => {
      document.dispatchEvent(new CustomEvent('pswpBeforeOpen'));
    });

    lightbox.on('afterInit', () => {
      document.dispatchEvent(new CustomEvent('pswpAfterInit'));
    });

    lightbox.on('close', () => {
      document.dispatchEvent(new CustomEvent('pswpClose'));
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, [galleryRef, imageSizes]);
};