import React, {Component} from 'react';
import {SafeAreaView, FlatList, StatusBar, RefreshControl,Text, Button} from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from './styles'


class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        console.log(this.props);
        this.props.initList();
      };

    onGifPress = gif => {
        this.props.setItem(gif);
        Actions.push('Details', {title: gif.title});
    }

    render() {
        return(
            <>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={styles.container}>
                <FlatList contentContainerStyle={styles.contentContainer}
                data={this.props.list}
                keyExtractor={item => `test`}
                refreshControl={
                <RefreshControl 
                refreshing={this.props.refreshing} 
                onRefresh={this.props.initList} 
                />
            }
                />
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
