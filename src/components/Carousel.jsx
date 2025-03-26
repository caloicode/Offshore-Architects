import { useState, useEffect, useRef } from "react";
import Card from "./Card";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(data.length); // Start in the middle
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const extendedData = [...data, ...data, ...data];
  const transitionRef = useRef();

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    transitionRef.current = handleTransitionEnd;
  });

  const handleTransitionEnd = () => {
    if (currentIndex >= data.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(data.length);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(data.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      // Without transition, instantly snap to the center
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          onTransitionEnd={() => transitionRef.current()}
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
                padding: cardsToShow > 1 ? "0 8px" : "0",
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