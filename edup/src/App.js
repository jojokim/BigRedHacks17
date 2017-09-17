import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Face from './Components/face'

class App extends Component {


  render() {
    const styles = {
      title: {
        background: '#ff7e5f',
      },
      body: {
        background: 'linear-gradient(90deg, #ff7e5f, #FF5F6D)',
      },
    };

    return (
      <div style={styles.body}>
        <AppBar
          title="EDUP"
          style={styles.title}
        />
        <Face/>
      </div>
    );
  }
}

export default App;
