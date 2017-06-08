import React from 'react';

export default ({ style = {}, children }) => {

  const originalStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  };

  const flexStyle = {
    ...originalStyle,
    ...style
  };

  return (
    <div style={flexStyle}>{children}</div>
  );
};
