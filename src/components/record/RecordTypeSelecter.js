import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

import _ from 'lodash';

import {__RECORD_TYPE} from '../../utils/RecordConfig';

const RecordTypeSelecter = ({selectedType, typeHandler}) => {
  return (
    <>
      {_.map(_.chunk(__RECORD_TYPE, 4), (rowTypes, idx) => {
        return (
          <View key={idx} style={styles.row}>
            {_.map(rowTypes, (type, typeIdx) => (
              <TouchableOpacity
                key={typeIdx}
                style={[
                  styles.item,
                  selectedType === type.name ? styles.itemTextActive : {},
                ]}
                onPress={() => typeHandler(type.name)}>
                <Text style={styles.itemText}>{type.label}</Text>
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
    height: 40,
  },
  item: {
    width: '25%',
    justifyContent: 'center',
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
  },
  itemTextActive: {
    backgroundColor: 'green',
  },
});

export default RecordTypeSelecter;

//   recordTypeItemActive: {
//     width: '25%',
//     backgroundColor: 'white',
//   },
//   recordTypeItemInactive: {
//     width: '25%',
//     // backgroundColor: 'green'
//   },
//   recordTypeText: {
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     height: 45,
//     fontSize: 20,
//   },
{
  /* {_.map(_.chunk(__RECORD_TYPE, 4), (rowData, rowIdx) => {
          return (
            <View key={rowIdx} style={{flexDirection: 'row'}}>
              {_.map(rowData, (recordItem, recordItemIdx) => (
                <TouchableOpacity
                  key={recordItemIdx}
                  style={[
                    styles.recordTypeItem,
                    recordType == recordItem.name
                      ? styles.recordTypeItemActive
                      : styles.recordTypeItemInactive,
                  ]}
                  onPress={() => setRecordType(recordItem.name)}>
                  <Text style={[styles.recordTypeText]}>
                    {recordItem.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          );
        })} */
}
