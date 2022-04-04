import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {styles} from './styles';

export const GenreGrid = ({item, onSelected}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GenreGrid;
