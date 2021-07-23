import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  imageContainer: {
    marginHorizontal: 20,
    marginTop: 60,
    marginBottom: 60,
  },
  imageButtonContainer: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.6)',
    borderStyle: 'dashed',
    height: 200,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageButton: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  imageButtonLabel: {
    color: colors.white,
    fontSize: 16,
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    //height: 200,
    right: 0,
    left: 0,
    resizeMode: 'contain',
    overflow: 'hidden',
    borderRadius: 8,
  },
  input: {marginBottom: 40, marginHorizontal: 20},
  error: {
    textAlign: 'right',
    fontSize: 12,
    color: colors.red,
    marginTop: 6,
    textTransform: 'lowercase',
  },
});
