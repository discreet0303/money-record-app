import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const RecordItem = ({record}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>
        {record.note === '' ? record.type : record.note}
      </Text>
      <Text style={styles.moneyText}>${record.money}</Text>
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
  root: {
    marginBottom: 5,
  },
  content: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 5,
  },
  contentIcon: {
    flex: 1,
  },
  contentText: {
    fontSize: 18,
    flex: 3,
    padding: 10,
  },
  moneyText: {
    fontSize: 18,
    flex: 1,
    textAlign: 'right',
  },
  hiddenContent: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  hiddenContentText: {
    height: 50,
    width: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export {RecordItem, RecordHiddenItem};
