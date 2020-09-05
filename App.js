import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LogoScreen from './src/containers/LogoScreen';
import {
  RecordStackNavigation,
  getNavHeaderTitle,
} from './src/navigation/RecordStackNavigation';
import {
  BottomTabNavigation,
  getBottomTabHeaderTitle,
} from './src/navigation/BottomTabNavigation';

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
        <Stack.Screen
          name="BottomTabStack"
          component={BottomTabNavigation}
          options={({route}) => ({
            headerTitle: getBottomTabHeaderTitle(route),
          })}
        />
        <Stack.Screen
          name="RecordStack"
          component={RecordStackNavigation}
          options={({route}) => ({
            headerTitle: getNavHeaderTitle(route),
          })}
        />
        <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
        <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
