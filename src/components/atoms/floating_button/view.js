import React, { Component } from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import colors from '../../../assets/colors';



class FloationActionButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.floatinBtn}>
                    <Image
                    source={require('../../../assets/images/plus.png')}
                    style={styles.image}
                     /> 
                </View>
            </TouchableOpacity>
        );
    }

}

FloationActionButton.defaultProps = {
    onPress: () => {},
}

export default FloationActionButton;