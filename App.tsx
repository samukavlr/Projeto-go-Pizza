import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
// import theme from './src/goPizza/theme/theme';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import {
  useFonts,
  // Poppins_400Regular,
  // Poppins_500Medium,
  // Poppins_700Bold,
  DMSerifDisplay_400Regular,
  
} from '@expo-google-fonts/dm-serif-display';
import{DMSans_400Regular} from '@expo-google-fonts/dm-sans'

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
   
    DMSerifDisplay_400Regular,
    DMSans_400Regular
  })
  if(!fontsLoaded) return null;
  
  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>    
  );
}

