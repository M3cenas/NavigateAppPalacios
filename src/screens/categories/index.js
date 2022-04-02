import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {CATEGORIES} from '../../constants/categories';

const Categories = ({navigation, route}) => {
  const {id} = route.params;
  const selectedCategory = CATEGORIES.find(category => category.id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedCategory.name}</Text>
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

export default Categories;
