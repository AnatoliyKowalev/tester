import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class Statistic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixedIndex: false,
      tableData: {
        columns: [
          {
            label: 'Paramter',
            field: 'paramter',
            sort: 'asc',
            width: 140
          },
          {
            label: 'Value',
            field: 'value',
            sort: 'asc',
            width: 100
          }
        ],
        rows: [
          {
            paramter: 'Time:',
            value: '',
          },
          {
            paramter: 'Days passed',
            value: '0',
          },
          {
            paramter: 'Months passed',
            value: '0.02',
          },
          {
            paramter: 'Deals:',
            value: '',
          },
          {
            paramter: 'All deals',
            value: '0',
          },
          {
            paramter: 'Profitable deals',
            value: '0',
          },
          {
            paramter: 'Unprofitable deals',
            value: '0',
          },
          {
            paramter: 'Profitable deals in a row',
            value: '0',
          },
          {
            paramter: 'Unprofitable deals in a row',
            value: '0',
          },
          {
            paramter: 'Deals at day',
            value: '0',
          },
          {
            paramter: 'Deals at month',
            value: '0',
          },
          {
            paramter: 'Profitable deals at month',
            value: '0',
          },
          {
            paramter: 'Unprofitable deals at month',
            value: '0',
          },
          {
            paramter: 'Max.profitable deal',
            value: '0.00',
          },
          {
            paramter: 'Max. unprofitable deal',
            value: '0.00',
          },
          {
            paramter: 'Profit:',
            value: '',
          },
          {
            paramter: 'Profit/Unprofit',
            value: '0.00',
          },
          {
            paramter: 'Total profit',
            value: '0.00',
          },
          {
            paramter: 'Total unprofit',
            value: '0.00',
          },
          {
            paramter: 'Profit at month',
            value: '0.00',
          },
          {
            paramter: 'Average profit',
            value: '0.00',
          },
          {
            paramter: 'Average unprofit',
            value: '0.00',
          }
        ]
      },
    };
  }

  render() {
    return (
      <div className="Section" >
        <div className="Section__name">Statistic</div>
        <div className="Section__top" style={{ flexBasis: 0 }}></div>
        <div className="Section__bottom">
          <div className="dataTables_wrapper">
            <MDBTable
              id="dataWindowInfo"
              fixed
              scrollY
              striped
              // maxHeight='219px'
              hover
              bordered
              small>
              <MDBTableHead columns={this.state.tableData.columns} />
              <MDBTableBody rows={this.state.tableData.rows} />
            </MDBTable>
          </div>
        </div>
      </div>
    )
  }
}
