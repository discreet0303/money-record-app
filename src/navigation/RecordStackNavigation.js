import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import RecordStoreScreen from '../containers/record/RecordStoreScreen';
import {HomeScreen1, HomeScreen2} from '../TestScreen';

const stack = createStackNavigator();

const getNavHeaderTitle = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'RecordStoreScreen';

  switch (routeName) {
    case 'RecordStoreScreen':
      return '紀錄';
    default:
      return routeName;
  }
};

const RecordStackNavigation = ({navigation, route}) => {
  return (
    <stack.Navigator>
      <stack.Screen name="RecordStoreScreen" component={RecordStoreScreen} />
    </stack.Navigator>
  );
};

export {RecordStackNavigation, getNavHeaderTitle};
