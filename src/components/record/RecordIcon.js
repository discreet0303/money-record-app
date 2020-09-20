import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {__DEFAULT_RECORD_CATEGORY} from '../../utils/RecordConfig';

const RecordIcon = ({type, iconSize = 20}) => {
  const iconColor = __DEFAULT_RECORD_CATEGORY[type].iconColor ?? 'black';
  switch (type) {
    case 'food':
      return (
        <MaterialCommunityIcons name="food" size={iconSize} color={iconColor} />
      );
    case 'drink':
      return (
        <MaterialCommunityIcons name="cup" size={iconSize} color={iconColor} />
      );
    case 'transportation':
      return (
        <MaterialCommunityIcons
          name="train"
          size={iconSize}
          color={iconColor}
        />
      );
    case 'consumption':
      return (
        <MaterialCommunityIcons
          name="shopping"
          size={iconSize}
          color={iconColor}
        />
      );
    case 'home':
      return (
        <MaterialCommunityIcons name="home" size={iconSize} color={iconColor} />
      );
    case 'income':
      return (
        <MaterialCommunityIcons
          name="piggy-bank"
          size={iconSize}
          color={iconColor}
        />
      );
    case 'others':
      return (
        <MaterialCommunityIcons
          name="bookmark-multiple"
          size={iconSize}
          color={iconColor}
        />
      );
    default:
      break;
  }
};

export default RecordIcon;
