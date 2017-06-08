import React from 'react';
import ShapeObject from './ShapeObject';

export default ({ shape, color, onClick }) => {
  const style = {
    cursor: 'pointer'
  };

  return (
    <a style={style} onClick={onClick}>
      <ShapeObject shape={shape} h={25} w={25} color={color} />
    </a>
  );
};

