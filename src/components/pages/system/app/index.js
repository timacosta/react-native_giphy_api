import React, {Component} from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux'
import {Provider} from 'react-redux'

import Home from '../../home/view';
import Details from '../../details/view';
import store from '../../../../config/redux';




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Stack key="root">
          <Scene key="Home" component={Home} hideNavBar initial ></Scene>
          <Scene key="Details" component={Details}/>
        </Stack>
      </Router>
      </Provider>
      
    );
  }
};

export default App;
