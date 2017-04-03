import React, { Component } from 'react';
import Figura from './components/Figura';
import Figura2 from './components/Figura2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Figura/>
        <Figura2/>
      </div>
    );
  }
}

export default App;
