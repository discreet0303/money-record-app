import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Keyboard,
  TextInput,
} from 'react-native';

import _ from 'lodash';

import RecordTypeSelecter from '../../components/record/RecordTypeSelecter';
import Calculator from '../../components/Calculator';
import {mathCalculate} from '../../utils/record/Calculator';
import {appendCsvData} from '../../utils/FileManager';
import {commonDateType} from '../../utils/TimeFormater';

const RecordStoreScreen = ({navigation, route}) => {
  const [mathStack, setMathStack] = useState([]);
  const [money, setMoney] = useState(0);
  const [type, setType] = useState('food');
  const [note, onNoteChange] = useState('');

  useEffect(() => {
    setMoney(mathCalculate(mathStack));
  }, [mathStack]);

  const recordInit = () => {
    setMathStack([]);
    setMoney(0);
    onNoteChange('');
  };

  const recordHandler = async () => {
    if (money === 0) {
      navigation.push('ModalStack', {
        screen: 'TipModal',
        params: {type: 'warning', message: '請輸入金額'},
      });
      return;
    }
    await appendCsvData({
      date: commonDateType(),
      wallet: 0,
      type: type,
      money: money,
      note: note,
      deleted_at: '',
    });
    recordInit();
    navigation.push('ModalStack', {
      screen: 'TipModal',
      params: {type: 'success', message: '新增成功'},
    });
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-200}
      style={{
        height: Dimensions.get('window').height - 80,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{flex: 1}}>
        {/[+-]/.test(_.join(mathStack, '')) ? (
          <>
            <Text style={[styles.moneyText, {fontSize: 25}]}>
              {_.join(mathStack, '')}
            </Text>
            <Text style={[styles.moneyText, {fontSize: 35}]}>${money}</Text>
          </>
        ) : (
          <Text style={[styles.moneyText, {fontSize: 40}]}>${money}</Text>
        )}
        <View style={styles.divide}></View>
        <RecordTypeSelecter selectedType={type} typeHandler={setType} />
        <View style={styles.divide}></View>
        <TextInput
          placeholder="請輸入"
          style={styles.noteText}
          value={note}
          onChangeText={(text) => onNoteChange(text)}
        />
        <View style={styles.divide}></View>
      </View>
      <Calculator
        mathStack={mathStack}
        setMathStack={setMathStack}
        recordHandler={recordHandler}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  moneyText: {
    textAlign: 'right',
    marginRight: 5,
  },
  divide: {
    height: 1,
    backgroundColor: '#b3b3b3',
  },
  noteText: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});

export default RecordStoreScreen;
