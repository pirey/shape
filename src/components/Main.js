import React from 'react';
import Flex from './Flex';
import Shape from './Shape';

export default () => {
  const style = {
    position: 'fixed',
    height: '100%',
    width: '100%',
  };

  return (
    <Flex style={style}>
      <Shape />
      <Shape shape="circle" />
      <Shape shape="triangle" />
    </Flex>
  );
};
