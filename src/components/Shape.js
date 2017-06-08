import React from 'react';
import createStyles from './shapeStyles';

export default ({ shape = 'square', color = 'gold', w = 200, h = 200 }) => {

  const shapeStyles = createStyles({ color, w, h });

  return (
    <div>
      <div style={shapeStyles[shape]}></div>
    </div>
  );
}
