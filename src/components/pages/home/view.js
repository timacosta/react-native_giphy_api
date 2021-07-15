import React, {Component} from 'react';

import {SafeAreaView, FlatList, StatusBar, RefreshControl,Text} from 'react-native'
import {Actions} from 'react-native-router-flux'


class Home extends Component {
    render() {
        return(
            <>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView>
                <Text>Hello</Text>
            </SafeAreaView>
            </>
        );
    }
}

export default Home;
