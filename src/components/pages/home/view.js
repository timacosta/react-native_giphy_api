import React, {Component} from 'react';
import {SafeAreaView, FlatList, StatusBar, RefreshControl, FloatingButton} from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from './styles'

import GifCard from '../../molecules/card-gif';
import FloationActionButton from '../../atoms/floating_button';
import GifAdd from '../../organism/gif-add';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.initList();
      };

    onGifPress = gif => {
        this.props.setItem(gif);
        Actions.push('Details', {title: gif?.title || ''});
    }

    render() {
        return(
            <>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={styles.container}>
            <FlatList contentContainerStyle={styles.contentContainer}
                data={this.props.list}
                keyExtractor={item => `gif-card-${item.id}`}
                refreshControl={
                <RefreshControl 
                refreshing={this.props.loading} 
                onRefresh={this.props.initList} 
                colors={['white']}
                tintColor={'white'}
                />
            }
            renderItem={({item}) => (
                <GifCard
                gif={item}
                onPress={gif => this.onGifPress(gif)}
                />
            )}
            numColumns={1}
            />
            <FloationActionButton
                onPress={() => Actions.push('GifAdd')}
            />
            </SafeAreaView>
            </>
        );
    }
}

export default Home;
