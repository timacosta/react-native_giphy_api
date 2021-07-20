import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, Text, View} from 'react-native'
import styles from './styles'

class DetailCard extends Component {
    render() {
        console.log(this.props)
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


}

export default DetailCard;