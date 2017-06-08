import React from 'react';
import ControlItem from './ControlItem';

export default ({ changeSquare, changeCircle, changeTriangle }) => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justiryContent: 'center',
  };

  return (
    <div style={style}>
      <ControlItem onClick={changeSquare} shape="square" color="teal" />
      <ControlItem onClick={changeCircle} shape="circle" color="gold" />
      <ControlItem onClick={changeTriangle} shape="triangle" color="pink" />
    </div>
  );
};
