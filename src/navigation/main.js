import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home/index'
import Categories from '../screens/categories/index'
import Album from '../screens/album/index'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='Album' component={Album} />
        </Stack.Navigator>
    )
}

export default MainNavigator; 