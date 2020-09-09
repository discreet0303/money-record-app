import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

// require params: {type: '', message: ''}
const TipModal = ({navigation, route}) => {
  const [isModalVisible, setModalVisible] = useState(true);
  const [modalParams, setModalParams] = useState({
    type: 'success',
    message: '',
  });

  const toggleModal = () => {
    navigation.goBack();
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setModalParams(route.params);
  }, [route.params]);

  const messageBlock = () => {
    let tipView = {height: 50, justifyContent: 'center'};
    switch (modalParams.type) {
      case 'success':
        tipView = {...tipView, backgroundColor: '#4e8cf5'};
        break;
      case 'warning':
        tipView = {...tipView, backgroundColor: '#ffc107'};
      default:
        break;
    }

    return (
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={{...tipView}}>
          <Text style={styles.tipText}>{modalParams.message}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Modal
      isVisible={isModalVisible}
      backdropOpacity={0}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      onBackdropPress={toggleModal}
      onBackButtonPress={toggleModal}
      style={styles.modal}>
      {messageBlock()}
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

export default TipModal;
