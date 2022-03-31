import {styleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    borderRadius: 5,
    margin: 10,
    height: height / 4,
  },
  touchable: {
    flex: 1,
    borderRadius: 5,
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
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
});
