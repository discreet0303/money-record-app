import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
import moment from 'moment';

LocaleConfig.locales['zh-TW'] = {
  monthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  monthNamesShort: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  dayNames: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
  dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
};

LocaleConfig.defaultLocale = 'zh-TW';

export const Calcu = ({navigation, route}) => {
  return (
    <View
      style={{
        flex: 1,
        borderColor: 'red',
        borderWidth: 2,
        height:
          Dimensions.get('window').height - (StatusBar.currentHeight || 24),
      }}>
      <Agenda style={{height: 200}} />
      {/* <Calendar
        // Specify style for calendar container element. Default = {}
        dayComponent={({date, state}) => {
          const initStyle = {
            height: 30,
            width: 30,
            textAlign: 'center',
            textAlignVertical: 'center',
            color: state === 'disabled' ? 'gray' : 'black',
          };
          const todayStyle = {
            borderRadius: 30 / 2,
            borderWidth: 2,
            borderColor: 'red',
          };
          return (
            <View>
              <Text style={[initStyle, state === 'today' ? todayStyle : {}]}>
                {date.day < 10 ? '0' + date.day : date.day}
              </Text>
            </View>
          );
        }}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350,
          borderWidth: 3,
          borderColor: 'green',
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      /> */}
    </View>
  );
};

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

// Modal
export const ModalScreen1 = ({navigation, route}) => {
  const pageName = 'ModalScreen1';
  const goToPage = 'ModalScreen2';
  return (
    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
      <Text>This is the {pageName}</Text>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} />
      <Button
        title={`Go to the ${goToPage}`}
        onPress={() => navigation.navigate(goToPage)}
      />
    </View>
  );
};
export const ModalScreen2 = ({navigation, route}) => {
  const pageName = 'ModalScreen2';
  const goToPage = 'ModalScreen1';
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
