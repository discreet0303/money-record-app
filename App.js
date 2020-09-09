import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  RecordStackNavigation,
  getNavHeaderTitle,
} from './src/navigation/RecordStackNavigation';
import {
  BottomTabNavigation,
  getBottomTabHeaderTitle,
  getHeaderRightAction,
} from './src/navigation/BottomTabNavigation';
import {ModalStackNavigation} from './src/navigation/ModalStackNavigation';

import LogoScreen from './src/containers/LogoScreen';
import {
  HomeScreen1,
  HomeScreen2,
  ModalScreen1,
  ModalScreen2,
  Test,
} from './src/TestScreen';
import {View, Text} from 'react-native';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogoScreen"
        component={LogoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTabStack"
        component={BottomTabNavigation}
        options={({navigation, route}) => ({
          headerTitle: getBottomTabHeaderTitle(route),
          headerRight: () => getHeaderRightAction(navigation, route),
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
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
          cardOverlayEnabled: true,
          animationEnabled: false,
        }}>
        <Stack.Screen name="RootStack" component={RootStack} />
        <Stack.Screen
          name="ModalStack"
          component={ModalStackNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
