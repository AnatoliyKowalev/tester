import React, { Component } from 'react'
// import { Table } from 'react-materialize';
import { MDBDataTable } from 'mdbreact';

export default class OpenPositionsSection extends Component {

  constructor(props){
		super(props);
		this.state = {
      tableData: {
        columns: [
          {
            label: 'Order',
            field: 'order',
            sort: 'asc',
            width: 110
          },
          {
            label: 'Symbol',
            field: 'symbol',
            sort: 'asc',
            width: 110
          },
          {
            label: 'Type',
            field: 'type',
            sort: 'asc',
            width: 110
          },
          {
            label: 'Lot',
            field: 'lot',
            sort: 'asc',
            width: 110
          },
          {
            label: 'Open time',
            field: 'openTime',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Open Price',
            field: 'openPrice',
            sort: 'asc',
            width: 150
          },
          {
            label: 'S/L',
            field: 'SL',
            sort: 'asc',
            width: 110
          },
          {
            label: 'T/P.',
            field: 'TP',
            sort: 'asc',
            width: 110
          },
          {
            label: "Current price",
            field: 'currentPrice',
            sort: 'asc',
            width: 120
          },
          {
            label: "Comment",
            field: 'comment',
            sort: 'asc',
            width: 150
          },
          {
            label: "Swop",
            field: 'swop',
            sort: 'asc',
            width: 110
          },
          {
            label: "Commission",
            field: 'commission',
            sort: 'asc',
            width: 110
          },
          {
            label: "Points",
            field: 'points',
            sort: 'asc',
            width: 110
          },
          {
            label: "Profit",
            field: 'profit',
            sort: 'asc',
            width: 110
          }
        ],
        rows: [
          {
            order: '0',
            symbol: ' ',
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
            profit: 10000.00
          },
          {
            order: '0',
            symbol: ' ',
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
            profit: 10000.00
          },
          {
            order: '0',
            symbol: ' ',
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
            profit: 10000.00
          },
          {
            order: '0',
            symbol: ' ',
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
            profit: 10000.00
          },
          {
            order: '0',
            symbol: ' ',
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
            profit: 10000.00
          },
          {
            order: '1',
            symbol: ' ',
            type: 'deposit',
            lot: 1.00,
            openTime: '2018.04.02 00:00',
            openPrice: 0.3452,
            SL: 0.20,
            TP: 0.70,
            closePrice: 0.2653,
            comment: 'initial deposit',
            swop: 1.00,
            commission: 0.00,
            points: 2,
            profit: 10000.00
          },
          
        ]
      }
    }
  }

  
  render() {
    return (
      <div className="Section" >
        <div className="Section-name">Open positions [{this.props.openPositionCount}]</div>
        <div className="Section__bottom column">
          <MDBDataTable
            searching={false}
            scrollY
            scrollX
            maxHeight='146px'
            striped
            hover
            bordered
            small
            data={this.state.tableData}
          />
        </div>

    
    </div>
    
    )
  }
}
  
