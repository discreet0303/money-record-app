import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreen1, TabScreen2} from '../TestScreen';

const BottomTab = createBottomTabNavigator();

const getBottomTabHeaderTitle = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'TabScreen1';

  switch (routeName) {
    case 'TabScreen1':
      return 'TabScreen1';
    default:
      return routeName;
  }
};

const BottomTabNavigation = ({navigation, route}) => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="TabScreen1" component={TabScreen1} />
      <BottomTab.Screen name="TabScreen2" component={TabScreen2} />
    </BottomTab.Navigator>
  );
};

export {BottomTabNavigation, getBottomTabHeaderTitle};
