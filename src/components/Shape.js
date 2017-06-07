import React from 'react';
import createStyles from './shapeStyles';

export default ({ shape = 'square', color = 'gold', w = '200px', h = '200px' }) => {

  const shapeStyles = createStyles({ color, w, h });

  console.log('shape', shape, shapeStyles);

  return (
    <div>
      <div style={shapeStyles[shape]}></div>
    </div>
  );
}
