import { useEffect, useRef, useState } from "react";

const useBlurLayer = () => {
  const [showBlurLayer, setShowBlurLayer] = useState(false);
  const blurLayerRef = useRef(null);

  useEffect(() => {
    const handleBeforeOpen = () => {
      setShowBlurLayer(true);
    };

    const handleAfterInit = () => {
      if (blurLayerRef.current) {
        blurLayerRef.current.style.zIndex = "1499";
      }
    };

    const handleClose = () => {
      setShowBlurLayer(false);
    };

    document.addEventListener("pswpBeforeOpen", handleBeforeOpen);
    document.addEventListener("pswpAfterInit", handleAfterInit);
    document.addEventListener("pswpClose", handleClose);

    return () => {
      document.removeEventListener("pswpBeforeOpen", handleBeforeOpen);
      document.removeEventListener("pswpAfterInit", handleAfterInit);
      document.removeEventListener("pswpClose", handleClose);
    };
  }, []);

  const BlurLayer = () =>
    showBlurLayer && (
      <div
        ref={blurLayerRef}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        style={{
          zIndex: 1499,
          pointerEvents: "none",
        }}
      />
    );

  return BlurLayer;
};

export default useBlurLayer;
