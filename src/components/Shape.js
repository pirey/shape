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

    this.changeSquare = this.changeSquare.bind(this);
    this.changeCircle = this.changeCircle.bind(this);
    this.changeTriangle = this.changeTriangle.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeCircle(e) {
    this.setState((prevState, props) => ({
      shape: 'circle'
    }));
  }

  changeTriangle(e) {
    this.setState((prevState, props) => ({
      shape: 'triangle'
    }));
  }

  changeSquare(e) {
    this.setState((prevState, props) => ({
      shape: 'square'
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
          changeCircle={this.changeCircle}
          changeSquare={this.changeSquare}
          changeTriangle={this.changeTriangle}
          changeColor={this.changeColor}
        />
      </div>
    );
  }
}

export default Shape;
