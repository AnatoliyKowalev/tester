import React, { Component, Suspense } from 'react';
import { MDBDataTable } from 'mdbreact';

export default class LogSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableData: {
        columns: [
          {
            label: 'Date/Time',
            field: 'dateTime',
            sort: 'asc'
          },
          {
            label: 'Message',
            field: 'message',
            sort: 'asc'
          }
        ],
        rows: [
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
          {
            dateTime: '.2019.07.11 20:53:26',
            message: 'Indicator TimeBox.dll loaded'
          },
        ]
      }
    }
  }
  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <div className="Section">
          <div className="Section__name">Logs</div>
          <div className="Section__bottom column">
            <MDBDataTable
              searching={false}
              scrollY
              scrollX
              striped
              hover
              bordered
              small
              data={this.state.tableData}
            />
          </div>
        </div>
      </Suspense>
    )
  }
}
