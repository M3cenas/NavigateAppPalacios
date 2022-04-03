import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {GENRES} from '../../constants/genres';

const Album = ({navigation, route}) => {
  const {id} = route.params;
  const selectedGenre = GENRES.find(genre => genre.id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedGenre.name}</Text>
      <Button
        title="Hip-Hop"
        onPress={() => {
          navigation.navigate('Album');
        }}
        color="#7D938A"
      />
    </View>
  );
};

export default Album;
