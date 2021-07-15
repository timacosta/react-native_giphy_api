import React, {Component} from 'react';

import {SafeAreaView, FlatList, StatusBar, RefreshControl,Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

import styles from './styles'


class Details extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
    }

    render() {
        return(
            <>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={styles.container}>
                <FlatList
                contentContainerStyle={styles.contentContainer}
                />
            </SafeAreaView>
            </>
        );
    }
}

export default Details;
