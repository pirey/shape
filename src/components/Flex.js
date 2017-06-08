import React from 'react';

export default ({ children, direction = 'row' }) => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: direction,
  };

  return (
    <div style={style}>{children}</div>
  );
};
