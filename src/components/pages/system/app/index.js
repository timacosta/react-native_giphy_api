import React, {Component} from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux'

import Home from '../../home/view';





class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="Home" component={Home}></Scene>
        </Stack>
      </Router>
    );
  }
};

export default App;
