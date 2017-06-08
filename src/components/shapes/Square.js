import React from 'react';

const Square = ({ color, w }) => {

  const squareStyle = {
    margin: 20,
    transition: 'all 1s cubic-bezier(0, 0.61, 0, 1.09)',
    backgroundColor: color,
    width: w,
    height: w
  };

  return (
    <div style={squareStyle}></div>
  );
};

export default Square;
