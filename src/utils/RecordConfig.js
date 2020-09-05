export const __RECORD_TYPE = [
  {name: 'food', label: '食物'},
  {name: 'drink', label: '飲品'},
  {name: 'transportation', label: '交通'},
  {name: 'consumption', label: '消費'},
  {name: 'home', label: '居家'},
  {name: 'income', label: '收入'},
  {name: 'others', label: '其他'},
];

export const __CSV_DATA_INFO = {
  date: {index: 0},
  wallet: {index: 1},
  type: {index: 2},
  money: {index: 3},
  note: {index: 4},
  deleted_at: {index: 5},
};

// 'date', 'time', 'wallet', 'type', 'money', 'note'
// {date: commonDateType(), wallet: 0, type: recordType, money: num, note: recordNote, deleted_at: ''}
export const __TEST_DATA = [
  {
    key: 1,
    date: '2020-07-01',
    time: '10:10',
    wallet: 0,
    type: 'food',
    money: 10000,
    note: 'note1',
  },
  {
    key: 2,
    date: '2020-07-01',
    time: '10:10',
    wallet: 0,
    type: 'drink',
    money: 200,
    note: 'note2',
  },
  {
    key: 3,
    date: '2020-07-01',
    time: '10:10',
    wallet: 0,
    type: 'transportation',
    money: 300,
    note: 'note3',
  },
  {
    key: 4,
    date: '2020-07-01',
    time: '10:10',
    wallet: 0,
    type: 'consumption',
    money: 400,
    note: '',
  },
  {
    key: 5,
    date: '2020-07-01',
    time: '10:10',
    wallet: 0,
    type: 'home',
    money: 500,
    note: 'note4',
  },
  {
    key: 6,
    date: '2020-07-01',
    time: '10:10',
    wallet: 0,
    type: 'income',
    money: 600,
    note: 'note4',
  },
  {
    key: 7,
    date: '2020-07-01',
    time: '10:10',
    wallet: 0,
    type: 'other',
    money: 700,
    note: 'note4',
  },
];
