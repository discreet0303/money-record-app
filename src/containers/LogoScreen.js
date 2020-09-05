import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {StackActions} from '@react-navigation/native';
import handlePermission from '../utils/Permissions';

const LogoScreen = ({navigation, route}) => {
  const goToPage = 'HomeScreen1';
  useEffect(() => {
    const runEffect = async () => {
      const permission = await handlePermission();
      if (permission) {
        setTimeout(() => {
          navigation.dispatch(StackActions.replace(goToPage));
        }, 1000);
      } else {
        alert('Permission Error');
      }
    };
    runEffect();
  }, []);

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
