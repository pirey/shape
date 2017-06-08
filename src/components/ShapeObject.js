import React from 'react';

const createStyles = ({ color, w, h }) => {
  const commonStyle = {
    margin: 20,
    transition: 'border-radius .3s cubic-bezier(0, 0.61, 0, 1.09)',
    fontFamily: 'monospace',
    width: w,
    height: h,
    backgroundColor: color,
  };

  const triangleWidth = w / 2;

  const shapeStyle = {
    square: {
      ...commonStyle,
    },
    circle: {
      ...commonStyle,
      borderRadius: '50%',
    },
    triangle: {
      ...commonStyle,
      width: 0,
      height: 0,
      borderLeft: `${triangleWidth}px solid transparent`,
      borderRight: `${triangleWidth}px solid transparent`,
      borderBottom: `${w}px solid ${color}`,
      backgroundColor: 'transparent',
    }
  };

  return shapeStyle;
};

const ShapeObject = ({ shape = 'square', color = 'gold', w = 200, h = 200 }) => {

  const shapeStyles = createStyles({ color, w, h });

  return (
    <div>
      <div style={shapeStyles[shape]}></div>
    </div>
  );
};

export default ShapeObject;
