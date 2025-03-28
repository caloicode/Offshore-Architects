import { useState, useEffect } from "react";
import Loader from "./Loader";

const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 🌟 COMMENT THIS BLOCK if you want to load instantly
    // const timer = setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000); // ← simulate 3-second load
    // return () => clearTimeout(timer);
    
    // 🌟 UNCOMMENT THIS LINE if you want to load instantly
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loader />;

  return <>{children}</>;
};

export default PageWrapper;
