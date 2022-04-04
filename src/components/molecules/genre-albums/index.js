import React from 'react';
import {View, Text, TouchableOpacity, Platform, Image} from 'react-native';
import {styles} from './styles';

export const GenreAlbum = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => onSelected(item)}>
        <View style={styles.details}>
          <Image style={styles.coverArt} source={item.coverArt} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.artist}>{item.artist}</Text>
          {/* <Text style={styles.artist}>{item.releaseDate.toString()}</Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GenreAlbum;
