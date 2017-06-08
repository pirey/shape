import React, { Component } from 'react';
import ShapeObject from './ShapeObject';
import Control from './Control';

class Shape extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shape: 'square'
    };

    this.changeSquare = this.changeSquare.bind(this);
    this.changeCircle = this.changeCircle.bind(this);
    this.changeTriangle = this.changeTriangle.bind(this);
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

  render() {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    };

    return (
      <div style={containerStyle}>
        <ShapeObject w={200} h={200} shape={this.state.shape} color="gold" />
        <Control
          changeCircle={this.changeCircle}
          changeSquare={this.changeSquare}
          changeTriangle={this.changeTriangle}
        />
      </div>
    );
  }
}

export default Shape;
