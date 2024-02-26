import React from 'react';
import {
  FaRegStar,
  FaStar,
  FaStarHalfAlt
} from 'react-icons/fa';

const Ratings = ({ value, text, color }) => {
  const fullStars = Math.floor(value);
  const halfStars = value - fullStars > 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const fullStarsArray = [];
  for (let i = 0; i < fullStars; i++) {
    fullStarsArray.push(<FaStar key={i} className={`text-${color} ml-1`} />);
  }

  const emptyStarsArray = [];
  for (let i = 0; i < emptyStars; i++) {
    emptyStarsArray.push(<FaRegStar key={i} className={`text-${color} ml-1`} />);
  }

  return (
    <div className='flex items-center'>
      {fullStarsArray}
      
      {halfStars === 1 && (
        <FaStarHalfAlt className={`text-${color} ml-1`} />
      )}

      {emptyStarsArray}

      <span className={`rating-text ml-[2rem] text-${color}`}>
        {text && text}
      </span>
    </div>
  );
};

Ratings.defaultProps = {
  color: "yellow-500"
};

export default Ratings;



