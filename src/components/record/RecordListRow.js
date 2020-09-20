import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import RecordIcon from './RecordIcon';
import NumberToMoney from '../NumberToMoney';

import {__DEFAULT_RECORD_CATEGORY} from '../../utils/RecordConfig';

const RecordItem = ({record}) => {
  return (
    <View style={styles.content}>
      <RecordIcon type={record.type} iconSize={40} />
      <Text style={styles.contentText}>
        {record.note === ''
          ? __DEFAULT_RECORD_CATEGORY[record.type].label
          : record.note}
      </Text>
      <NumberToMoney number={record.money} type={record.type} />
    </View>
  );
};

const RecordHiddenItem = ({record, handleRecordItem}) => {
  return (
    <TouchableOpacity
      style={styles.hiddenContent}
      onPress={() => handleRecordItem(record.key)}>
      <Text style={styles.hiddenContentText}>刪除</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 5,
  },
  contentText: {
    fontSize: 20,
    flex: 1,
    padding: 10,
  },
  moneyText: {
    fontSize: 18,
  },
  hiddenContent: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  hiddenContentText: {
    width: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export {RecordItem, RecordHiddenItem};
