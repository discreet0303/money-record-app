import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';

const TextInputModal = ({navigation, route}) => {
  const [textValue, onChangeText] = useState('');

  useEffect(() => {
    onChangeText(route.params?.currentTextValue);
  }, [route.params?.currentTextValue]);

  const modalHandler = (type = 'goBack') => {
    const {pageName, currentTextValue} = route.params;
    if (type === 'update') {
      navigation.navigate(pageName, {textValue});
    } else {
      navigation.navigate(pageName, {textValue: currentTextValue});
    }
  };

  return (
    <View style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => modalHandler('goBack')}>
        <View style={{flex: 1}}></View>
      </TouchableWithoutFeedback>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          paddingLeft: 10,
          backgroundColor: 'white',
        }}>
        <TextInput
          defaultValue={textValue}
          autoFocus={true}
          placeholder="輸入項目"
          style={{flex: 4, fontSize: 20}}
          value={textValue}
          onChangeText={(text) => onChangeText(text)}
        />
        <View style={{width: 1, backgroundColor: 'gray'}}></View>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => modalHandler('update')}>
          <Text style={{fontSize: 20}}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextInputModal;
