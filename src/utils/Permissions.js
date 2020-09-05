import {Platform} from 'react-native';
import _ from 'lodash';

import {
  PERMISSIONS,
  check,
  RESULTS,
  request,
  checkMultiple,
  requestMultiple,
} from 'react-native-permissions';

const PERMISSION_TYPE = {
  readStorage: {
    ios: null,
    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  },
  writeStorage: {
    ios: null,
    android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  },
  readCalendar: {
    ios: null,
    android: PERMISSIONS.ANDROID.READ_CALENDAR,
  },
};

const checkAllPermission = async () => {
  const result = await checkMultiple([
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ]);
  return result;
};

const requestAllPermission = async () => {
  const result = await requestMultiple([
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ]);
  return result;
};

const checkResult = (result) =>
  _.every(_.map(result), (res) => res === 'granted');

const handlePermission = async () => {
  const result = await checkAllPermission();

  const isSuc = checkResult(result);
  if (isSuc) {
    return true;
  } else {
    const requestResult = await requestAllPermission();
    return checkResult(requestResult);
  }
};

export default handlePermission;
