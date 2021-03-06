import React from 'react';

const Circle = ({ color, w, h }) => {

  const circleStyle = {
    margin: 20,
    transition: 'all 1s cubic-bezier(0, 0.61, 0, 1.09)',
    backgroundColor: color,
    width: (w + h) / 2,
    height: (w + h) / 2,
    borderRadius: '50%',
  };

  return (
    <div style={circleStyle}></div>
  );
};

export default Circle;
