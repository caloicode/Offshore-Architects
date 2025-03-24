import { useState, useEffect } from "react";
import Card from "./Card";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(data.length); // Start in the middle of the extended data
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate the data for seamless looping
  const extendedData = [...data, ...data, ...data];

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Tablet
      } else {
        setCardsToShow(1); // Mobile
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    // Reset to the middle of the extended data when reaching the boundaries
    if (currentIndex >= data.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(data.length);
      }, 300); // Match the transition duration
    } else if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(data.length * 2);
      }, 300); // Match the transition duration
    }
  }, [currentIndex, data.length]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            transition: isTransitioning ? "transform 0.3s ease" : "none",
          }}
        >
          {extendedData.map((item, index) => (
            <div
              key={index}
              className="w-full"
              style={{
                flex: `0 0 ${100 / cardsToShow}%`,
                padding: cardsToShow > 1 ? "0 8px" : "0", // Add margin between cards
              }}
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;