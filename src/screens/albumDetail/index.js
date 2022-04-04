import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const AlbumDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MM... FOOD</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/coverArts/Mmfood.jpg')}
      />
      <Text>Released 16 November 2004</Text>
      <Text>Album Abstract Hip hop</Text>
      <Text>Length 48:54</Text>
    </View>
  );
};

export default AlbumDetail;
