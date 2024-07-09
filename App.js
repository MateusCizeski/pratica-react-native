import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/pages/Home';
import Sobre from './src/components/pages/Sobre';
import Contato from './src/components/pages/Contato';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Sobre' component={Sobre}/>
        <Stack.Screen name='Contato' component={Contato}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
