import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TipModal from '../components/modal/TipModal';
import TextInputModal from '../components/TextInputModal';
import {
  HomeScreen1,
  HomeScreen2,
  ModalScreen1,
  InputComponment,
} from '../TestScreen';

const Stack = createStackNavigator();

const ModalStackNavigation = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: true,
        animationEnabled: true,
        cardStyleInterpolator: ({current: {progress}}) => ({
          // overlayStyle: {
          //   opacity: progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [0, 0.5],
          //     extrapolate: 'clamp',
          //   }),
          // },
        }),
      }}>
      <Stack.Screen name="TipModal" component={TipModal} />
      {/* <Stack.Screen name="TextInputModal" component={TextInputModal} /> */}
    </Stack.Navigator>
  );
};

export {ModalStackNavigation};
