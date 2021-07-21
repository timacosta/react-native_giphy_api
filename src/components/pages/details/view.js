import React, {Component} from 'react';

import {SafeAreaView, View, FlatList, StatusBar, RefreshControl,Text, ScrollView, Image} from 'react-native'
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
        if(this.props.details?.images.original.url) {
            Image.getSize(this.props.details.images.original.url, (width, height) => {
                this.setState({aspectRatio: width / height})
            });
        }
    }

    render() {
        const {aspectRatio} = this.state;
        const gif = this.props;
        console.log('imageURLProps', gif);
        console.log('state', this.state);
        return(
            <>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={styles.container}>
            <ScrollView> 
            {aspectRatio ? (
                <Image
                     source={{uri: gif.details?.images.original.url}} 
                     style={[styles.image, {aspectRatio}]}>
                </Image>
            ) : null}

            <LabelValueBlock label={'Name: '} value={gif.details.title} />
            <LabelValueBlock label={'Type: '} value={gif.details.type} />
            <LabelValueBlock label={'URL: '} value={gif.details.source} />
            <LabelValueBlock label={'Trend since: '} value={gif.details.trending_datetime} />

            </ScrollView>
            </SafeAreaView>
            </>
        );
    }
}

class LabelValueBlock extends Component {
    render() {
        return(
            <View style={styles.row}>
                <Text style={styles.label}>{this.props.label || ''}</Text>
                <Text style={styles.value}>{this.props.value || ''}</Text>
            </View>
        );
    }
}

export default Details;
