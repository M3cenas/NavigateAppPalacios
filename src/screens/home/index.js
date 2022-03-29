import React from 'react';

import {View, Text, Button} from 'react-native'
import {styles} from './styles'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screw</Text>
      <Button title='go to categories' onPress={() => {
        navigation.navigate('Categories')
      }} color='#7D938A'/>
    </View>
  );
};

export default Home;