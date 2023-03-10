import React from 'react'
import Home from './Home';
import About from './About';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}