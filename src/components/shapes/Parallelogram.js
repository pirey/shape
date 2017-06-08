import React from 'react';

const Parallelogram = ({ color, w, h }) => {

  const style = {
    margin: 20,
    width: w,
    height: h,
    backgroundColor: color,
    transform: 'skew(-20deg)',
  };

  return (
    <div style={style}></div>
  );
};

export default Parallelogram;

