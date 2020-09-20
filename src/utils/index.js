import _ from 'lodash';
import {__DEFAULT_RECORD_CATEGORY} from '../utils/RecordConfig';

export const numberWithCommas = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const getRecordsAmount = (records, currencyPrefix = '') => {
  const nums = _.map(records, (record) => {
    const calcuMethod = __DEFAULT_RECORD_CATEGORY[record.type].calcuMethod;
    if (calcuMethod == 'add') return _.toInteger(record.money);
    else if (calcuMethod == 'sub') return -_.toInteger(record.money);
  });

  const amount = _.sum(nums);

  if (!currencyPrefix) return numberWithCommas(amount);

  if (amount > 0) return currencyPrefix + numberWithCommas(amount);
  else return `-${currencyPrefix}` + numberWithCommas(-1 * amount);
};
