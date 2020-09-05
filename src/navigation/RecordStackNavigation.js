import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen1, HomeScreen2} from '../TestScreen';

const stack = createStackNavigator();

const getNavHeaderTitle = (route) => {
  console.log('getNavHeaderTitle');
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'HomeScreen1';

  switch (routeName) {
    case 'HomeScreen1':
      return 'HomeScreen1';
    default:
      return routeName;
  }
};

const RecordStackNavigation = ({navigation, route}) => {
  return (
    <stack.Navigator>
      <stack.Screen name="HomeScreen1" component={HomeScreen1} />
      <stack.Screen name="HomeScreen2" component={HomeScreen2} />
    </stack.Navigator>
  );
};

export {RecordStackNavigation, getNavHeaderTitle};
