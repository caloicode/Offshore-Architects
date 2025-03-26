import React from "react";

const ReviewCard = ({ name, occupation, review, stars, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
        {name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {occupation}
      </p>
      <p className="italic text-gray-700 dark:text-gray-300 mb-4">"{review}"</p>
      <div className="flex justify-center">
        {Array.from({ length: stars }, (_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
        {Array.from({ length: 5 - stars }, (_, i) => (
          <span key={i} className="text-gray-300">★</span>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;