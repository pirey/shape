import React, { Component } from 'react';

import Container from './components/Container';
import Shape from './components/Shape';
import Control from './components/Control';

class App extends Component {
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
    return (
      <div>
        <Container>
          <Shape w="400px" h="400px" shape={this.state.shape} color="gold" />

          <Control
            changeCircle={this.changeCircle}
            changeSquare={this.changeSquare}
            changeTriangle={this.changeTriangle}
          />
        </Container>
      </div>
    );
  }
}

export default App;
