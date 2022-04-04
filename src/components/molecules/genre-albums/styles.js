import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../constants/themes';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    shadoColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: height / 4,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: colors.textColor,
  },
  price: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: '#000000',
  },
  coverArt: {
    height: 100,
    width: 100,
  },
});
