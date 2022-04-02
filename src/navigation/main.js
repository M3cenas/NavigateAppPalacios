import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/index';
import Categories from '../screens/categories/index';
import Album from '../screens/album/index';
import {colors} from '../constants/themes';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : colors.primaryColor,
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
          fontSize: 17,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen name="Album" component={Album} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
