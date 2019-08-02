import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

export default class PendingOrdersSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableData: {
        columns: [
          {
            label: 'Order',
            field: 'order',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Symbol',
            field: 'symbol',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Type',
            field: 'type',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Lot',
            field: 'lot',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Create time',
            field: 'openTime',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Use Price',
            field: 'openPrice',
            sort: 'asc',
            width: 150
          },
          {
            label: 'S/L',
            field: 'SL',
            sort: 'asc',
            width: 150
          },
          {
            label: 'T/P.',
            field: 'TP',
            sort: 'asc',
            width: 150
          },
          {
            label: "Current price",
            field: 'currentPrice',
            sort: 'asc',
            width: 150
          },
          {
            label: "Comment",
            field: 'comment',
            sort: 'asc',
            width: 400
          }
        ],
        rows: []
      }
    }
  }

  render(props) {
    return (
      <div className="Section" >
        <div className="Section__name">Pending orders [{this.props.pendingOrders}]</div>
        <div className="Section__top"></div>
        <div className="Section__bottom">
          <MDBDataTable
            searching={false}
            scrollY
            scrollX
            maxHeight='156px'
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
