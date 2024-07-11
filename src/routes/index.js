import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import Sobre from '../components/pages/Sobre';
import Contato from '../components/pages/Contato';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes(){
  return(
    <Drawer.Navigator 
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#00d1e4',
        drawerActiveTintColor: '#fff',
        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000'
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          title: 'Início'
        }}
      />

      <Drawer.Screen
        name="Sobre"
        component={Sobre}
      />

      <Drawer.Screen
        name="Contato"
        component={Contato}
      />
    </Drawer.Navigator>
  )
}