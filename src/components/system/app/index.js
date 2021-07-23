import React, {Component} from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux'
import {Provider} from 'react-redux'

import Home from '../../pages/home';
import Details from '../../pages/details';
import store from '../../../config/redux';
import GifAdd from '../../organism/gif-add';

const navBarProps = {
  backTitle: 'Gifs',
  backTitleEnabled: true,
  back: true,
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Stack key="root">
          <Scene key="Home" component={Home} hideNavBar initial />
          <Scene key="Details" component={Details} {...navBarProps}/>
          <Scene key="GifAdd" component={GifAdd} {...navBarProps}/>
        </Stack>
      </Router>
      </Provider>
      
    );
  }
};

export default App;

