import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreen1, TabScreen2} from '../TestScreen';

import RecordListScreen from '../containers/record/RecordListScreen';
const BottomTab = createBottomTabNavigator();

const getBottomTabHeaderTitle = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'RecordListScreen';

  switch (routeName) {
    case 'RecordListScreen':
      return '列表';
    default:
      return routeName;
  }
};

const BottomTabNavigation = ({navigation, route}) => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="RecordListScreen" component={RecordListScreen} />
      <BottomTab.Screen name="TabScreen2" component={TabScreen2} />
    </BottomTab.Navigator>
  );
};

export {BottomTabNavigation, getBottomTabHeaderTitle};
