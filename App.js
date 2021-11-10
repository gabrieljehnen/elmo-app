import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/screens/MainStack';
import DrawerNavigator from './src/screens/MainStack';
import BottomTab from './src/screens/MainStack';

export default function App() {

  
  return (
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    )
}

