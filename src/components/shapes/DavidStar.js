import React from 'react';

const DavidStart = ({ color, w }) => {

  const sideSize = w / 2;

  const offset = Math.round(w / 3);

  const style = {
    margin: 20,
    width: 0,
    height: 0,
    borderLeft: `${sideSize}px solid transparent`,
    borderRight: `${sideSize}px solid transparent`,
    borderBottom: `${w}px solid ${color}`,
    position: 'relative',
  };

  const after = {
    width: 0,
    height: 0,
    borderLeft: `${sideSize}px solid transparent`,
    borderRight: `${sideSize}px solid transparent`,
    borderTop: `${w}px solid ${color}`,
    position: 'absolute',
    content: '',
    top: `${offset}px`,
    left: `-${sideSize}px`,
  };

  return (
    <div style={style}>
      <div style={after}></div>
    </div>
  );
};

export default DavidStart;

