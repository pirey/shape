import React from 'react';

export default ({ color, onChange }) => {
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

  const labelStyle = {
    cursor: 'pointer',
    textShadow: `0 0 15px ${color}`,
    fontSize: 'large',
  };

  return (
    <div style={style}>
      <label style={labelStyle}>choose color<input onChange={onChange} style={inputStyle} type="color" /></label>
    </div>
  );
};
