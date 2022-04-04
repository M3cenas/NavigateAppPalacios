import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/index';
import Album from '../screens/album/index';
import AlbumDetail from '../screens/albumDetail/index';
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
        name="Album"
        component={Album}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen
        name="AlbumDetail"
        component={AlbumDetail}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
