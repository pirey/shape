import React from 'react';

export default ({ children, direction = 'row' }) => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: direction,
  };

  return (
    <div style={style}>{children}</div>
  );
};
