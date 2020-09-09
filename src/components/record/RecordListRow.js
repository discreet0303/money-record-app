import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {__RECORD_TYPE} from '../../utils/RecordConfig';

const recordType = {
  food: {name: '食物'},
  drink: {name: '飲品'},
  transportation: {name: '交通'},
  consumption: {name: '消費'},
  home: {name: '居家'},
  income: {name: '收入'},
  others: {name: '其他'},
};

const RecordItem = ({record}) => {
  const recordIcon = (type) => {
    switch (type) {
      case 'food':
        return <MaterialCommunityIcons name="food" size={40} color="#ff8e8e" />;
      case 'drink':
        return <MaterialCommunityIcons name="cup" size={40} color="#88c0b8" />;
      case 'transportation':
        return (
          <MaterialCommunityIcons name="train" size={40} color="#5dc3ff" />
        );
      case 'consumption':
        return (
          <MaterialCommunityIcons name="shopping" size={40} color="#c289ae" />
        );
      case 'home':
        return <MaterialCommunityIcons name="home" size={40} color="#b1c529" />;
      case 'income':
        return (
          <MaterialCommunityIcons name="piggy-bank" size={40} color="#edc134" />
        );
      case 'others':
        return (
          <MaterialCommunityIcons
            name="bookmark-multiple"
            size={40}
            color="#a8a8a8"
          />
        );
      default:
        break;
    }
  };

  return (
    <View style={styles.content}>
      {recordIcon(record.type)}
      <Text style={styles.contentText}>
        {record.note === '' ? recordType[record.type].name : record.note}
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
    flex: 3,
    padding: 10,
  },
  moneyText: {
    fontSize: 18,
    flex: 1,
    textAlign: 'right',
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
