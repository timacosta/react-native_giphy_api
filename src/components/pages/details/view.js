import React, {Component} from 'react';

import {SafeAreaView, FlatList, StatusBar, RefreshControl,Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import DetailCard from '../../molecules/card-details';

import styles from './styles'


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aspectRatio: null
        }
    }

    componentDidMount = () => {
    }

    getImageAspectRatio = async () => {
        //if(this.props.gif.)
    }

    render() {
        const {gif} = this.props;
        console.log('gif: ',gif);
        return(
            <>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={styles.container}>
            <DetailCard>
            </DetailCard>
            </SafeAreaView>
            </>
        );
    }
}

export default Details;
