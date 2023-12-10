import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Profile from '../screens/Profile'
import Logout from '../screens/LogOut'
import StackNavigator from './StackNavigator'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name= 'Home' component={StackNavigator}/>
            <Drawer.Screen name= 'Profile' component={Profile}/>
            <Drawer.Screen name= 'Logout' component={Logout} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator