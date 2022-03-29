import React from 'react';

import {View, Text, Button} from 'react-native'
import {styles} from './styles'

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Button title='Hip-Hop' onPress={() => {
        navigation.navigate('Album')
      }} color='#7D938A'/>
    </View>
  );
};

export default Categories;