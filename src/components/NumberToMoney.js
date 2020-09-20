import React from 'react';
import {Text} from 'react-native';

import _ from 'lodash';

import {numberWithCommas} from '../utils';
import {__DEFAULT_RECORD_CATEGORY} from '../utils/RecordConfig';

const NumberToMoney = ({number, type = 'none'}) => {
  const textColor =
    _.get(__DEFAULT_RECORD_CATEGORY, `${type}.moneyColor`) ?? 'black';

  const prefixText =
    _.get(__DEFAULT_RECORD_CATEGORY, `${type}.calcuMethod`) === 'add'
      ? '+'
      : '-';

  return (
    <Text style={{fontSize: 18, color: textColor}}>
      {prefixText}${numberWithCommas(number)}
    </Text>
  );
};

export default NumberToMoney;
