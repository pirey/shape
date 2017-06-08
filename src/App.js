import React, { Component } from 'react';

import ShapeContainer from './components/ShapeContainer';

class App extends Component {
  render() {
    return (
      <div>
        <ShapeContainer />
        <ShapeContainer />
      </div>
    );
  }
}

export default App;
