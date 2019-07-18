import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

export default class Symbols extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixedIndex: false,
      tableData: {
        columns: [
          {
            label: 'Symbol',
            field: 'symbol',
            sort: 'asc',
            width: 80
          },
          {
            label: 'Bid',
            field: 'bid',
            sort: 'asc',
            width: 80
          },
          {
            label: 'Ask',
            field: 'ask',
            sort: 'asc',
            width: 80
          },
          {
            label: 'S',
            field: 's',
            sort: 'asc',
            width: 40
          },
          {
            label: 'Progress',
            field: 'progress',
            sort: 'asc',
            width: 120,
          },
        ],
        rows: [
          {
            symbol: 'EURUSD',
            bid: 1.25345,
            ask: 1.25123,
            s: '-',
            progress: 'Data is up-to-date'
          },
          {
            symbol: 'EURUSD',
            bid: 1.25345,
            ask: 1.25123,
            s: '-',
            progress: 'Data is up-to-date'
          },
          {
            symbol: 'EURUSD',
            bid: 1.25345,
            ask: 1.25123,
            s: '-',
            progress: 'Data is up-to-date'
          },
          {
            symbol: 'EURUSD',
            bid: 1.25345,
            ask: 1.25123,
            s: '-',
            progress: 'Data is up-to-date'
          },
          {
            symbol: 'EURUSD',
            bid: 1.25345,
            ask: 1.25123,
            s: '-',
            progress: 'Data is up-to-date'
          },
          {
            symbol: 'EURUSD',
            bid: 1.25345,
            ask: 1.25123,
            s: '-',
            progress: 'Data is up-to-date'
          },
          {
            symbol: 'EURUSD',
            bid: 1.25345,
            ask: 1.25123,
            s: '-',
            progress: 'Data is up-to-date'
          },
          {
            symbol: 'EURGPY',
            bid: 1.25345,
            ask: 1.25123,
            s: '-',
            progress: 'Data is up-to-date'
          },
          {
            symbol: 'EURUSD',
            bid: 1.32345,
            ask: 1.25123,
            s: '-',
            progress: 'Data is up-to-date'
          },
        ]
      }
    };
  }

  render() {
    return (
      <div className="Section" >
        <div className="Section-name">Symbols</div>
        <div className="Section__bottom">
          <MDBDataTable
            searching={false}
            scrollY
            scrollX
            maxHeight='189px'
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
