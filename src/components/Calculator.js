import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import _ from 'lodash';

import {appendCsvData} from '../utils/FileManager';
import {commonDateType} from '../utils/TimeFormater';
import {mathCalculate} from '../utils/record/Calculator';

const calculatorData = [
  [{text: '7'}, {text: '8'}, {text: '9'}, {text: 'cle'}],
  [{text: '4'}, {text: '5'}, {text: '6'}, {text: '+'}],
  [{text: '1'}, {text: '2'}, {text: '3'}, {text: '-'}],
  [{text: 'x'}, {text: '0'}, {text: 'x'}, {text: 'V'}],
];

const operator = ['+', '-'];

const calculator = ({mathStack, setMathStack, recordHandler}) => {
  const calculatorHandler = (text) => {
    let _mathStack = _.cloneDeep(mathStack);
    if (text === 'V') {
      recordHandler();
      return;
    }
    if (_.includes(operator, text)) {
      if (_.isEmpty(_mathStack)) return;
      if (_.includes(operator, _.last(_mathStack))) {
        _mathStack[_mathStack.length - 1] = text;
        setMathStack(_mathStack);
        return;
      }
    }

    if (text === 'cle') _mathStack.pop();
    else _mathStack.push(text);

    setMathStack(_mathStack);
  };
  return (
    <>
      {_.map(calculatorData, (row, rowIdx) => {
        return (
          <View key={rowIdx} style={styles.row}>
            {_.map(row, (num, numIdx) => (
              <TouchableOpacity
                key={numIdx}
                style={styles.item}
                onPress={() => calculatorHandler(num.text)}>
                <Text style={styles.itemText}>{num.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#282c34',
  },
  item: {
    width: '25%',
  },
  itemText: {
    color: '#f7f7f7',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
});

export default calculator;
