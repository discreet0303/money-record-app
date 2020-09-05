import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

const LogoScreen = ({navigation, route}) => {
  const goToPage = 'HomeScreen1';
  return (
    <View>
      <Text>This is the LogoScreen</Text>
      <Button
        title={`Go to next page ${goToPage}`}
        onPress={() => navigation.navigate(goToPage)}
      />
    </View>
  );
};
export default LogoScreen;
