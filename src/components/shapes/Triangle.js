import React from 'react';

const Triangle = ({ color, w, h }) => {

  const size = (w + h) / 2;
  const sideSize = size / 2;

  const triangleStyle = {
    margin: 20,
    transition: 'all 1s cubic-bezier(0, 0.61, 0, 1.09)',
    width: 0,
    height: 0,
    borderLeft: `${sideSize}px solid transparent`,
    borderRight: `${sideSize}px solid transparent`,
    borderBottom: `${size}px solid ${color}`,
    backgroundColor: 'transparent',
  };

  return (
    <div style={triangleStyle}></div>
  );
};

export default Triangle;
