import React from 'react';

export default ({ onChange }) => {
  const style = {
    width: '100%',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'monospace',
  };

  const inputStyle = {
    visibility: 'hidden',
    width: 0,
    height: 0
  };

  return (
    <div style={style}>
      <label>choose color<input onChange={onChange} style={inputStyle} type="color" /></label>
    </div>
  );
};
