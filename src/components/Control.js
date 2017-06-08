import React from 'react';
import ControlShape from './ControlShape';
import ControlColor from './ControlColor';
import Flex from './Flex';

export default ({ activeShape, color, changeShape, changeColor }) => {

  const grey = '#eee';

  return (
    <div>
      <Flex>
        <ControlShape onClick={() => changeShape('square')} shape="square" color={activeShape === 'square' ? color : grey} />
        <ControlShape onClick={() => changeShape('circle')} shape="circle" color={activeShape === 'circle' ? color : grey} />
        <ControlShape onClick={() => changeShape('triangle')} shape="triangle" color={activeShape === 'triangle' ? color : grey} />
        <ControlShape onClick={() => changeShape('trapezoid')} shape="trapezoid" color={activeShape === 'trapezoid' ? color : grey} />
        <ControlShape onClick={() => changeShape('parallelogram')} shape="parallelogram" color={activeShape === 'parallelogram' ? color : grey} />
      </Flex>
      <Flex>
        <ControlColor color={color} onChange={changeColor} />
      </Flex>
    </div>
  );
};
