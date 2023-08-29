import React, { useState } from 'react';

const HoverHighlightText = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textStyle = {
    color: isHovered ? 'blue' : 'black',
    textDecoration: isHovered ? 'underline' : 'none',
    cursor: 'pointer', // Optional: Change cursor to a pointer on hover
  };

  return (
    <div>
      <p
        style={textStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me to see the effect!
      </p>
    </div>
  );
};

export default HoverHighlightText;
