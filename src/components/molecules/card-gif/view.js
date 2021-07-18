import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import styles from './styles';

class GifCard extends Component {
    //render function
    render() {
        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => this.props.onPress(this.props.gif)}>
            <Image
                style={styles.image}
                source={{uri: this.props.gif?.url}}
            
            />
            </TouchableOpacity>
        );
    }

}