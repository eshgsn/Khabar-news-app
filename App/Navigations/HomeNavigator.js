import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import Home from '../Screen/Home';
import ReadNews from '../Screen/ReadNews';


const Stack= createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}>
        <Stack.Screen name='home'
         component={Home}/>
         <Stack.Screen name='read-news'
         component={ReadNews}/>
    </Stack.Navigator>
  )
}

export default HomeNavigator
