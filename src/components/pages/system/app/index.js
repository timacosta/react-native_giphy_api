import React, {Component} from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux'

import Home from '../../home/view';
import Details from '../../details/view';





class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="Home" component={Home} hideNavBar initial ></Scene>
          <Scene key="Details" component={Details}/>
        </Stack>
      </Router>
    );
  }
};

export default App;
