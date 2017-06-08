import React from 'react';
import Square from './shapes/Square';
import Circle from './shapes/Circle';
import Triangle from './shapes/Triangle';
import Trapezoid from './shapes/Trapezoid';

const ShapeObject = ({ shape = 'square', color = 'gold', w = 200, h = 200 }) => {

  const shapes = {
    square: Square,
    circle: Circle,
    triangle: Triangle,
    trapezoid: Trapezoid,
  };

  const Shape = shapes[shape];

  return (
    <Shape color={color} w={w} h={h} />
  );
};

export default ShapeObject;
