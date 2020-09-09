import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RecordListScreen from '../containers/record/RecordListScreen';

import {TabScreen1, TabScreen2} from '../TestScreen';

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

const getHeaderRightAction = (navigation, route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'RecordListScreen';

  switch (routeName) {
    case 'RecordListScreen':
      return (
        <TouchableOpacity
          style={styles.headerRight}
          onPress={() =>
            navigation.push('RecordStack', {screen: 'RecordStoreScreen'})
          }>
          <Text>新增</Text>
        </TouchableOpacity>
      );
    default:
      return <View></View>;
  }
};

const BottomTabNavigation = ({navigation, route}) => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={40}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <BottomTab.Screen name="RecordListScreen" component={RecordListScreen} />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    padding: 10,
  },
});

export {BottomTabNavigation, getBottomTabHeaderTitle, getHeaderRightAction};
