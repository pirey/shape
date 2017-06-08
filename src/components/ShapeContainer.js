import React, { Component } from 'react';
import Shape from './Shape';
import Control from './Control';

class ShapeContainer extends Component {
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
      width: 500,
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <div style={containerStyle}>
        <Shape w={400} h={400} shape={this.state.shape} color="gold" />

        <Control
          changeCircle={this.changeCircle}
          changeSquare={this.changeSquare}
          changeTriangle={this.changeTriangle}
        />
      </div>
    );
  }
}

export default ShapeContainer;
