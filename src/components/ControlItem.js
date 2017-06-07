import React from 'react';
import Shape from './Shape';

export default ({ shape, color, onClick }) => {
  const style = {
    cursor: 'pointer'
  };

  return (
    <a style={style} onClick={onClick}>
      <Shape shape={shape} h="25px" w="25px" color={color} />
    </a>
  );
};

