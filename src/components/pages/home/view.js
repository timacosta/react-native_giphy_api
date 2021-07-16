import React, {Component} from 'react';

import {SafeAreaView, FlatList, StatusBar, RefreshControl,Text, Button} from 'react-native'
import {Actions} from 'react-native-router-flux'

import styles from './styles'


class Home extends Component {
    constructor(props) {
        console.log("Home")
        super(props);
    }

    componentDidMount = () => {
        console.log("componenDidMount")
        this.props
    }

    onGifPressed = gif => {
        this.props.setItem(gif);
    }

    render() {
        return(
            <>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={styles.container}>
                <FlatList contentContainerStyle={styles.contentContainer}
                data={this.props.list}
                keyExtractor={item => `test`}>

                </FlatList>
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
