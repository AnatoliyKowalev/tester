import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/pro-solid-svg-icons';

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
//Tabs of bottom menu
export const bottomMenuTabs = [
  'Open Positions',
  'Pending Orders',
  'Account History',
  'Log',
  'News',
  'Notes'
]
//windows of left bar component
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
//settings of the chart theme
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
//data for the table of Account history in the bottom menu
export const accountHistoryTable = [
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
    profit: -300.00
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
    profit: -35.00
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
//data for the table of news in the bottom menu
export const newsTable = [
  {
    openTime: '2019.04.01 00:00',
    symbol: 'USD',
    action: 'Italian Bank Holiday',
    priority: [<FontAwesomeIcon key="#" icon={faChartBar} priority={'high'} size={'2x'} color={'red'} />],
    current: '-0.6%',
    prediction: '-',
    previous: 0.1
  },
  {
    openTime: '2019.04.02 00:00',
    symbol: 'EUR',
    action: 'Italian Bank Holiday',
    priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} priority={'middle'} color={'orange'} />],
    current: '-0.6%',
    prediction: '-',
    previous: 0.1
  },
  {
    openTime: '2019.04.03 00:00',
    symbol: 'JPY',
    action: 'Italian Bank Holiday',
    priority: [<FontAwesomeIcon key="#" icon={faChartBar} priority={'high'} size={'2x'} color={'red'} />],
    current: '-0.6%',
    prediction: '-',
    previous: 0.1
  },
  {
    openTime: '2019.04.04 00:00',
    symbol: 'EUR',
    action: 'Italian Bank Holiday',
    priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} priority={'low'} color={'green'} />],
    current: '-0.6%',
    prediction: '-',
    previous: 0.1
  },
  {
    openTime: '2019.04.05 00:00',
    symbol: 'EUR',
    action: 'Italian Bank Holiday',
    priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} priority={'low'} color={'green'} />],
    current: '-0.6%',
    prediction: '-',
    previous: 0.1
  },
  {
    openTime: '2019.04.06 00:00',
    symbol: 'EUR',
    action: 'Italian Bank Holiday',
    priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} priority={'low'} color={'green'} />],
    current: '-0.6%',
    prediction: '-',
    previous: 0.1
  },
  {
    openTime: '2019.04.07 00:00',
    symbol: 'JPY',
    action: 'Crube Oil Inventories',
    priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} priority={'middle'} color={'orange'} />],
    current: '-0.3%',
    prediction: '-',
    previous: 0.1
  }

]
//data for the table of notes in the bottom menu
export const notesTable = [
  {
    notes: 'popline',
    symbol: 'f',
    headline: 'h'
  },
  {
    notes: 'f',
    symbol: 'f',
    headline: 'f'
  },
  {
    notes: 'f',
    symbol: 'sunskripper',
    headline: 'f'
  },
  {
    notes: 'f',
    symbol: 'f',
    headline: 'profit good'
  }, {
    notes: 'f',
    symbol: 'f',
    headline: 'f'
  }, {
    notes: 'f',
    symbol: 'f',
    headline: 'f'
  }
]
