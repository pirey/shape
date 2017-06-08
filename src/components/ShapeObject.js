import React from 'react';
import Square from './shapes/Square';
import Circle from './shapes/Circle';
import Triangle from './shapes/Triangle';
import Trapezoid from './shapes/Trapezoid';
import Parallelogram from './shapes/Parallelogram';

const ShapeObject = ({ shape, color, w, h }) => {

  const shapes = {
    square: Square,
    circle: Circle,
    triangle: Triangle,
    trapezoid: Trapezoid,
    parallelogram: Parallelogram,
  };

  const Shape = shapes[shape];

  return (
    <Shape color={color} w={w} h={h} />
  );
};

export default ShapeObject;
