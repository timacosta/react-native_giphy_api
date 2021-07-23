import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import styles from './styles';

class GifCard extends Component {
    //render function
    render() {
        const source = this.props.gif.images.original.url 
        console.log("this props",this.props)

        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => this.props.onPress(this.props.gif)}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={{uri: source || this.props.mockGif.image}}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{this.props.gif?.title || ''}</Text>
            </View>
            </TouchableOpacity>
        );
    }
}

GifCard.defaultProps = {
    gif: {},
    mockGif: {},
    onPress: () => {},
}

//GifCard.propTypes = {
    //gif: PropTypes.object,
    //onPress: PropTypes.func,
//};

export default GifCard;
