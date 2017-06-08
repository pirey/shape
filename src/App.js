import React from 'react';
import Flex from './components/Flex';
import Shape from './components/Shape';
import './App.css';

export default () => {
  const flexStyle = {
    position: 'fixed',
    height: '100%',
    width: '100%',
  };

  return (
    <Flex style={flexStyle}>
      <Shape />
    </Flex>
  );
};
