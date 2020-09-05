import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import _ from 'lodash';
import {SwipeListView} from 'react-native-swipe-list-view';

import {
  RecordItem,
  RecordHiddenItem,
} from '../../components/record/RecordListRow';
import {getCsvData, storeCsvData} from '../../utils/FileManager';
import {commonDateType, onlyDate} from '../../utils/TimeFormater';

const ReactListScreen = ({navigation, route}) => {
  const [recordData, setRecordData] = useState([]);
  const [date, setDate] = useState(onlyDate());

  useEffect(() => {
    const runEffect = async () => {
      const record = await getCsvData(date);
      setRecordData(record);
    };
    runEffect();
  }, []);

  const handleRecordItem = async (recordId) => {
    let record = _.cloneDeep(recordData);
    record[recordId].deleted_at = commonDateType();
    setRecordData(record);
    await storeCsvData(record, date);
  };
  if (_.isEmpty(recordData)) {
    return (
      <View style={styles.emptyView}>
        <TouchableOpacity
          style={styles.newRecordButton}
          onPress={() => navigation.navigate('MoneyStorePage')}>
          <Text style={styles.newRecordText}>新紀錄</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <>
      <SwipeListView
        data={_.filter(recordData, ['deleted_at', ''])}
        renderItem={(data, rowMap) => <RecordItem record={data.item} />}
        renderHiddenItem={(data, rowMap) => (
          <RecordHiddenItem
            record={data.item}
            handleRecordItem={handleRecordItem}
          />
        )}
        rightOpenValue={-60}
        disableRightSwipe={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  emptyView: {
    alignItems: 'center',
  },
  newRecordButton: {
    width: 100,
    alignItems: 'center',
    marginTop: 40,
  },
  newRecordText: {
    fontSize: 22,
    color: 'gray',
    textDecorationLine: 'underline',
  },
});
export default ReactListScreen;
