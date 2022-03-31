import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const Album = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MM... FOOD</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/images/Mmfood.jpg')}
      />
      <Text>Released 16 November 2004</Text>
      <Text>Genre Abstract Hip hop</Text>
      <Text>Length 48:54</Text>
    </View>
  );
};

export default Album;
