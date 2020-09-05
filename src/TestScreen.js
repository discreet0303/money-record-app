import React from 'react';
import {View, Text, Button} from 'react-native';

export const HomeScreen1 = ({navigation, route}) => {
  const pageName = 'HomeScreen1';
  const goToPage = 'HomeScreen2';
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the {pageName}</Text>
      <Button
        title={`Go to the ${goToPage}`}
        onPress={() => navigation.navigate(goToPage)}
      />
    </View>
  );
};
export const HomeScreen2 = ({navigation, route}) => {
  const pageName = 'HomeScreen2';
  const goToPage = 'HomeScreen1';
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the {pageName}</Text>
      <Button
        title={`Go to the ${goToPage}`}
        onPress={() => navigation.navigate(goToPage)}
      />
    </View>
  );
};
// Tab Screen
export const TabScreen1 = ({navigation, route}) => {
  const pageName = 'TabScreen1';
  const goToPage = 'RecordStack';
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the {pageName}</Text>
      <Button
        title={`Go to the ${goToPage}`}
        onPress={() => navigation.navigate(goToPage)}
      />
    </View>
  );
};
export const TabScreen2 = ({navigation, route}) => {
  const pageName = 'TabScreen2';
  const goToPage = 'HomeScreen1';
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the {pageName}</Text>
      <Button
        title={`Go to the ${goToPage}`}
        onPress={() => navigation.navigate(goToPage)}
      />
    </View>
  );
};
