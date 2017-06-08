import React from 'react';
import Shape from './Shape';

export default ({ shape, color, onClick }) => {
  const style = {
    cursor: 'pointer'
  };

  return (
    <a style={style} onClick={onClick}>
      <Shape shape={shape} h={25} w={25} color={color} />
    </a>
  );
};

