import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../screens/Login/index';
import { Cadastrar } from '../screens/Cadastrar/index';

const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes(){
   
    return(
      <>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Login" component={Login} />
          <Screen name="Cadastrar" component={Cadastrar} />
        </Navigator>
      </>
    )
}