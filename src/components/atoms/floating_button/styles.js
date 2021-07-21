import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
    floatinBtn: {
        backgroundColor: colors.floatingBtn,
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 10,
        right: 10,
        borderRadius: 45,
    },
    image: {
        width: 60,
        height: 60,
        bottom: 0,
        right: 0,
    }
  });

  export default styles;