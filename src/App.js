import React from 'react';
import Shape from './components/Shape';
import Flex from './components/Flex';

export default () => (
  <div>
    <Flex>
      <Shape />
      <Shape />
      <Shape />
    </Flex>
  </div>
);
