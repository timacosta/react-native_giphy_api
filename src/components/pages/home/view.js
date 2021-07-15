import React, {Component} from 'react';

import {SafeAreaView, FlatList, StatusBar, RefreshControl,Text, Button} from 'react-native'
import {Actions} from 'react-native-router-flux'

import styles from './styles'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifsList: [],
        }
    }

    componentDidMount = () => {
    }

    onGifPressed = gif => {
        this.props
    }

    render() {
        return(
            <>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={styles.container}>
                <Button
                title={'GO TO DETAILS'}
                color="blue"
                onPress={() => Actions.push('Details', {title: 'DETAILS'})}
                />
            </SafeAreaView>
            </>
        );
    }
}

export default Home;
