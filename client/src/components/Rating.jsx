import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

const Rating = ({ value }) => {
  const [stars, setStars] = useState(Array.from({ length: value }));

  return (
    <div style={{color:"gold"}} className="rating-star">
      {stars.map((_, index) => (
        <FaStar key={index} style={{margin:"5px"}} />
      ))}
    </div>
  );
};
export default Rating;