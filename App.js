import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LogoScreen from './src/containers/LogoScreen';
import {HomeScreen1, HomeScreen2} from './src/TestScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogoScreen"
          component={LogoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
        <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
