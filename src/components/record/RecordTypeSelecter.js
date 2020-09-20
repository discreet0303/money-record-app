import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

import _ from 'lodash';

import RecordIcon from './RecordIcon';
import {__DEFAULT_RECORD_CATEGORY} from '../../utils/RecordConfig';

const RecordTypeSelecter = ({selectedType, typeHandler}) => {
  return (
    <View style={styles.root}>
      {_.map(__DEFAULT_RECORD_CATEGORY, (typeInfo, type) => {
        return (
          <TouchableOpacity
            key={type}
            style={[
              styles.itemBlock,
              selectedType === type ? styles.itemTextActive : {},
            ]}
            onPress={() => typeHandler(type)}>
            <RecordIcon type={type} iconSize={30} />
            <Text style={{fontSize: 12}}>{typeInfo.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBlock: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  itemTextActive: {
    backgroundColor: '#d6d6d6',
  },
});

export default RecordTypeSelecter;
