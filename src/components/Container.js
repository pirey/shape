import React from 'react';

export default ({ children }) => {
  const containerStyle = {
    width: 500,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
}
