import React, { Component } from 'react';
import ShapeObject from './ShapeObject';
import Control from './Control';

class Shape extends Component {
  constructor(props) {
    super(props);

    const { color = 'gold', shape = 'square' } = props;

    this.state = {
      shape,
      color,
    };

    this.changeColor = this.changeColor.bind(this);
    this.changeShape = this.changeShape.bind(this);
  }

  changeShape(shape) {
    this.setState((prevState, props) => ({
      shape
    }));
  }

  changeColor(e) {
    this.setState({ color: e.target.value });
  }

  render() {

    const { w = 200, h = 200 } = this.props;

    const { color, shape } = this.state;

    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    };

    return (
      <div style={containerStyle}>
        <ShapeObject color={color} w={w} h={h} shape={shape} />
        <Control
          activeShape={shape}
          color={color}
          changeShape={this.changeShape}
          changeColor={this.changeColor}
        />
      </div>
    );
  }
}

export default Shape;
