import React, { useState } from 'react';

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    onRatingChange(value);
  };

  return (
    <div className="star-rating my-4">
      <p className="text-xl text-center text-white font-semibold mb-2">How do you like our website so far?</p>
      <div className="flex justify-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            className={`text-4xl cursor-pointer ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
      <div className="flex justify-between text-white text-sm mt-2">
        <span>Not much</span>
        <span>Very much</span>
      </div>
    </div>
  );
};

export default StarRating;
