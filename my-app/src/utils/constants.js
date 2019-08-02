export const topMenuTabs = [
  'Home',
  'Project',
  'Chart',
  'Graphic',
  'Indcators',
  'Strategies',
  'Tools',
  'Store',
  'Help'
]

export const bottomMenuTabs = [
  'Open Positions',
  'Pending Orders',
  'Account History',
  'Log',
  'News',
  'Notes'
]

export const leftBarWindows = [
  [
    'Data Window',
    'Scripts',
  ],
  [
    'Symbols',
    'Ticks',
    'Statistics'
  ]
]

export const chartSettings = {
  light: {
    textColor: '#403740',
    linesColor: '#403740'
  },
  dark: {
    textColor: '#dddadb',
    linesColor: '#dddadb'
  }
}

export const sortParameters = {
  byDate: {
    0: 'Any Date',
    1: 'Open Date',
    2: 'Close Date',
    3: 'Close Date or Open Date',
    4: 'Close Date and Open Date'
  },
  byType: {
    0: 'All',
    1: 'Buy',
    2: 'Sale',
    3: 'Deposit',
    4: 'Withdrawal'
  },
  byProfitType: {
    0: 'All',
    1: 'Profit',
    2: 'Lesion'
  }
};


export let accountHistoryTable = [
  {
    order: '2',
    symbol: 'EURUSD',
    type: 'deposit',
    lot: 0.00,
    openTime: '2018.04.01 00:00',
    openPrice: 0.00,
    SL: 0.00,
    TP: 0.00,
    closePrice: 0.00,
    comment: 'initial deposit',
    swop: 0.00,
    commission: 0.00,
    points: 0,
    profit: 11000.00
  },
  {
    order: '3',
    symbol: 'USDEUR',
    type: 'deposit',
    lot: 0.00,
    openTime: '2018.04.02 00:00',
    openPrice: 0.00,
    SL: 0.00,
    TP: 0.00,
    closePrice: 0.00,
    comment: 'initial deposit',
    swop: 0.00,
    commission: 0.00,
    points: 0,
    profit: 11000.00
  },
  {
    order: '0',
    symbol: 'GBPJPY',
    type: 'deposit',
    lot: 0.00,
    openTime: '2018.04.03 00:00',
    openPrice: 0.00,
    SL: 0.00,
    TP: 0.00,
    closePrice: 0.00,
    comment: 'initial deposit',
    swop: 0.00,
    commission: 0.00,
    points: 0,
    profit: 11000.00
  },
  {
    order: '0',
    symbol: 'JPYUSD',
    type: 'sale',
    lot: 0.00,
    openTime: '2018.04.07 00:00',
    openPrice: 0.00,
    SL: 0.00,
    TP: 0.00,
    closePrice: 0.00,
    comment: 'initial deposit',
    swop: 0.00,
    commission: 0.00,
    points: 0,
    profit: 11000.00
  },
  {
    order: '1',
    symbol: 'JPYUSD',
    type: 'deposit',
    lot: 1.00,
    openTime: '2018.04.08 00:00',
    openPrice: 0.3452,
    SL: 0.20,
    TP: 0.70,
    closePrice: 0.2653,
    comment: 'initial deposit',
    swop: 1.00,
    commission: 0.00,
    points: 2,
    profit: 11000.00
  }
]
