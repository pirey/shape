import React from 'react';

const Trapezoid = ({ color, w, h }) => {

  const size = (w + h) / 2;
  const sideSize = size / 2;
  const trapezoidStyle = {
    margin: 20,
    transition: 'all 1s cubic-bezier(0, 0.61, 0, 1.09)',
    width: w,
    borderBottom: `${size}px solid ${color}`,
    borderLeft: `${sideSize}px solid transparent`,
    borderRight: `${sideSize}px solid transparent`,
    height: 0,
    backgroundColor: 'transparent',
  };

  return (
    <div style={trapezoidStyle}></div>
  );
};

export default Trapezoid;
