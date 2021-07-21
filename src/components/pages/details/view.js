import React, {Component} from 'react';

import {SafeAreaView, FlatList, StatusBar, RefreshControl,Text, ScrollView, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import colors from '../../../assets/colors';
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
        this.getImageAspectRatio();
    }

    getImageAspectRatio = async () => {
        if(this.props.gif?.images.original.url) {
            Image.getSize(this.props.gif.images.original.url, (width, height) => {
                this.setState({aspectRatio: width / height})
            });
        }
    }

    render() {
        const {aspectRatio} = this.state;
        const gifURI = this.props.details.images.original.url;
        console.log('imageURLProps', gifURI);
        console.log('state', this.state);
        return(
            <>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={styles.container}>
            <Image 
            style={styles.image}
            source={{uri: gifURI}} />
            <ScrollView> 
            {aspectRatio ? (
                <Image
                     source={{uri: gifURI}} 
                     style={[styles.image, {aspectRatio}]}>
                </Image>
            ) : null}
            </ScrollView>
            </SafeAreaView>
            </>
        );
    }
}

export default Details;
