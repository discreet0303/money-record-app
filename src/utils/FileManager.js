import RNFetchBlob from 'rn-fetch-blob';
import _ from 'lodash';
import {onlyDate} from './TimeFormater';

import {__CSV_DATA_INFO} from '../utils/RecordConfig';

const fieldName = _.keys(__CSV_DATA_INFO);
const folderPath = RNFetchBlob.fs.dirs['SDCardDir'] + '/Money';

const checkFolderExist = async () => {
  const isDir = await RNFetchBlob.fs.isDir(folderPath);
  if (!isDir) await RNFetchBlob.fs.mkdir(folderPath);
  return true;
};

const transformCsvData = (originalData) => {
  let data = [];
  const rowData = originalData.split(/\r?\n/);
  _.each(rowData, (row, rowIndex) => {
    if (row === '') return true;

    const record = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    let recordData = {};
    _.each(fieldName, (key) => {
      recordData[key] = record[__CSV_DATA_INFO[key]['index']];
    });

    recordData['index'] = rowIndex;
    data.push(recordData);
  });

  return data;
};

// Get record from csv
const getCsvData = async (fileName = onlyDate()) => {
  const filePath = `${folderPath}/${fileName}.csv`;
  const fileExists = await RNFetchBlob.fs.exists(filePath);

  let csvData = [];
  if (fileExists) {
    await RNFetchBlob.fs.readFile(filePath, 'utf8').then((data) => {
      csvData = transformCsvData(data);
    });
  }
  return csvData;
};

// Store record to csv
const storeCsvData = async (records, fileName = onlyDate()) => {
  await checkFolderExist();
  let csvString = '';
  _.each(records, (record) => {
    csvString +=
      _.join(
        _.map(fieldName, (name) => record[name]),
        ',',
      ) + '\n';
  });
  const filePath = `${folderPath}/${fileName}.csv`;
  RNFetchBlob.fs
    .writeFile(filePath, csvString, 'utf8')
    .then((res) => {
      console.log(csvString);
    })
    .catch((error) => console.error('error:', error));
};

// Append one record to csv
const appendCsvData = async (record, fileName = onlyDate()) => {
  let oldRecord = await getCsvData(fileName);
  oldRecord.push(record);
  await storeCsvData(oldRecord, fileName);
};

export {getCsvData, storeCsvData, appendCsvData};
