import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const TipModal = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    navigation.goBack();
    setModalVisible(!isModalVisible);
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
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={styles.tipView}>
          <Text style={styles.tipText}>新增成功</Text>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  tipView: {
    height: 50,
    backgroundColor: '#4e8cf5',
    justifyContent: 'center',
  },
  tipText: {textAlign: 'center', fontSize: 20, color: 'white'},
});

export default TipModal;
