import React, { Component } from 'react';
import './App.css';

import Face from './Components/face'

//let store = createStore();

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Face/>
      </div>
    );
  }
}

export default App;
