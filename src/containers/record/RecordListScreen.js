import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import _ from 'lodash';
import moment from 'moment';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useFocusEffect} from '@react-navigation/native';

import {
  RecordItem,
  RecordHiddenItem,
} from '../../components/record/RecordListRow';

import {numberWithCommas, getRecordsAmount} from '../../utils';
import {getCsvData, storeCsvData} from '../../utils/FileManager';

const ReactListScreen = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(true);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [records, setRecords] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      handleRecord(date).then(() => {
        setTimeout(() => setLoading(false), 500);
      });
    }, [date]),
  );

  const handleRecord = async () => {
    const res = await getCsvData(date);
    setRecords(res);
  };

  const updateRecord = async (selectedDate) => {
    setDate(selectedDate);
    navigation.setParams({
      date: selectedDate,
    });
    setLoading(true);
  };

  const handleRecordItem = async (recordId) => {
    let record = _.cloneDeep(records);
    record[recordId].deleted_at = moment().format('YYYY-MM-DD');
    setRecords(record);
    await storeCsvData(record, date);
  };

  if (isLoading)
    return (
      <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 30}} />
    );

  const EmptyComponment = () => (
    <TouchableOpacity
      style={{alignItems: 'center', marginVertical: 10}}
      onPress={() =>
        navigation.push('RecordStack', {
          screen: 'RecordStoreScreen',
          params: {
            date: date,
          },
        })
      }>
      <Text
        style={{fontSize: 22, color: 'gray', textDecorationLine: 'underline'}}>
        新紀錄
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.dateInfoView}
        onPress={() => {
          navigation.push('ModalStack', {
            screen: 'CalendarModal',
            params: {
              selectedDate: date,
              handleDate: updateRecord,
            },
          });
        }}>
        <Text style={{fontSize: 45}}>{moment(date).format('DD')}</Text>
        <View
          style={{
            borderLeftWidth: 2,
            borderLeftColor: 'gray',
            width: 1,
            height: 40,
            marginHorizontal: 6,
          }}></View>
        <View style={{flex: 1}}>
          <Text style={{color: 'gray', fontSize: 20}}>
            {moment(date).format('MMM')}.
          </Text>
          <Text style={{color: 'gray'}}>{moment(date).year()}</Text>
        </View>
        <Text style={{fontSize: 30, color: 'black'}}>
          {getRecordsAmount(records, '$')}
        </Text>
      </TouchableOpacity>
      {_.isEmpty(records) ? (
        <EmptyComponment />
      ) : (
        <SwipeListView
          data={_.filter(records, ['deleted_at', ''])}
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateInfoView: {
    backgroundColor: 'white',
    marginVertical: 5,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default ReactListScreen;
