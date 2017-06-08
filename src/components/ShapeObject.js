import React from 'react';

const createStyles = ({ color, w, h }) => {
  const commonStyle = {
    margin: 20,
    transition: 'all 1s cubic-bezier(0, 0.61, 0, 1.09)',
    fontFamily: 'monospace',
    width: w,
    height: h,
    backgroundColor: color,
  };

  const triangleWidth = (w + h) / 2;
  const triangleSide = triangleWidth / 2;

  const trapezoidWidth = (w + h) / 2;
  const trapezoidSide = trapezoidWidth / 2;

  const shapeStyle = {
    square: {
      ...commonStyle,
      width: (w + h) / 2,
      height: (w + h) / 2,
    },
    circle: {
      ...commonStyle,
      width: (w + h) / 2,
      height: (w + h) / 2,
      borderRadius: '50%',
    },
    triangle: {
      ...commonStyle,
      width: 0,
      height: 0,
      borderLeft: `${triangleSide}px solid transparent`,
      borderRight: `${triangleSide}px solid transparent`,
      borderBottom: `${triangleWidth}px solid ${color}`,
      backgroundColor: 'transparent',
    },
    trapezoid: {
      ...commonStyle,
      borderBottom: `${trapezoidWidth}px solid ${color}`,
      borderLeft: `${trapezoidSide}px solid transparent`,
      borderRight: `${trapezoidSide}px solid transparent`,
      height: 0,
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
