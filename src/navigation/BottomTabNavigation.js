import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const BottomTabStack = ({navigation, route}) => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="" />
    </BottomTab.Navigator>
  );
};

export {BottomTabStack};
