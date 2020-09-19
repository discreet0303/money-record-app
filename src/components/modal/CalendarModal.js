import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import {Calendar} from 'react-native-calendars';

import moment from 'moment';

const CalendarModal = ({navigation, route}) => {
  const [isModalVisible, setModalVisible] = useState(true);
  const [modalParams, setModalParams] = useState({
    selectedDate: route.params.selectedDate,
    handleDate: null,
  });

  const toggleModal = () => {
    navigation.goBack();
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setModalParams(route.params);
  }, [route.params]);

  return (
    <Modal
      isVisible={isModalVisible}
      backdropOpacity={0}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      onBackdropPress={toggleModal}
      onBackButtonPress={toggleModal}
      style={styles.modal}>
      <View style={{backgroundColor: 'red'}}>
        <Calendar
          dayComponent={({date, state, onPress}) => {
            // console.log(state);
            const initStyle = {
              height: 25,
              width: 25,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: state === 'disabled' ? 'gray' : 'black',
            };
            const seletedStyle = {
              backgroundColor: '#06acf5',
              color: 'white',
              borderRadius: 25 / 2,
            };
            const todayStyle = {
              borderColor: '#06acf5',
              borderWidth: 2,
              borderRadius: 25 / 2,
            };
            let dayStyle = {};
            if (date.dateString === modalParams.selectedDate)
              dayStyle = seletedStyle;
            else if (state === 'today') dayStyle = todayStyle;
            return (
              <TouchableOpacity onPress={() => onPress(date)}>
                <Text style={[initStyle, dayStyle]}>
                  {date.day < 10 ? '0' + date.day : date.day}
                </Text>
              </TouchableOpacity>
            );
          }}
          onDayPress={(day) => {
            modalParams.handleDate(day.dateString);
            toggleModal();
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  tipText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CalendarModal;
