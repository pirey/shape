import React from 'react';
import ControlShape from './ControlShape';
import ControlColor from './ControlColor';
import Flex from './Flex';

export default ({ activeShape, color, changeColor, changeSquare, changeCircle, changeTriangle }) => {

  const grey = '#eee';

  return (
    <div>
      <Flex>
        <ControlShape onClick={changeSquare} shape="square" color={activeShape === 'square' ? color : grey} />
        <ControlShape onClick={changeCircle} shape="circle" color={activeShape === 'circle' ? color : grey} />
        <ControlShape onClick={changeTriangle} shape="triangle" color={activeShape === 'triangle' ? color : grey} />
      </Flex>
      <Flex>
        <ControlColor onChange={changeColor} />
      </Flex>
    </div>
  );
};
