import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Logo from './icon.jpg';

import Face from './Components/face'

class App extends Component {


  render() {
    const styles = {
      title: {
        background: '#ff9e54',
      },
      body: {
        background: 'linear-gradient(90deg, #ff9e54, #ffb379)',
      },
      largeIcon: {
        width: 60,
        height: 60,
      },
      large: {
        width: 80,
        height: 80,
        paddingBottom: 5,
        paddingRight: 5,
      },
      iconStyles: {
        marginRight: 24,
      },

    };

    return (
      <div style={styles.body}>
        <AppBar style={styles.title}
          iconElementLeft={
              <img src={Logo} style={styles.large} alt=""/>
            } />
        <Face/>
      </div>
    );
  }
}

export default App;
