import moment from 'moment';

export const commonDateType = (date = moment()) => moment(date).format('YYYY-MM-DD hh:mm:ss');

export const onlyDate = (date = moment()) => moment(date).format('YYYY-MM-DD');