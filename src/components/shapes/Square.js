import React from 'react';

const Square = ({ color, w, h }) => {

  const squareStyle = {
    margin: 20,
    transition: 'all 1s cubic-bezier(0, 0.61, 0, 1.09)',
    backgroundColor: color,
    width: (w + h) / 2,
    height: (w + h) / 2,
  };

  return (
    <div style={squareStyle}></div>
  );
};

export default Square;
