import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class DataWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedIndex: false,
      tableData: {
        columns: [
          {
            label: 'Paramter',
            field: 'paramter',
            sort: 'asc'
          },
          {
            label: 'Value',
            field: 'value',
            sort: 'asc'
          }
        ],
        rows: [
          {
            parameter: 'some 1',
            value: 'value 1'
          },
          {
            parameter: 'some 2',
            value: 'value 2'
          },
          {
            parameter: 'some 3',
            value: 'value 3'
          },
          {
            parameter: 'some 3',
            value: 'value 3'
          },
          {
            parameter: 'some 3',
            value: 'value 3'
          },
          {
            parameter: 'some 3',
            value: 'value 3'
          },
          {
            parameter: 'some 3',
            value: 'value 3'
          },
          {
            parameter: 'some 4',
            value: 'value 4'
          },
        ]
      },
      displayDataWindow: false
    };
  }

  toggleContentDisplay = e => {
    this.setState({ displayDataWindow: e.target.checked })
  }

  render() {
    return (
      <div className="Section" >
        <div className="Section__name">Data window</div>
        <div className="Section__top">
          <label htmlFor="fixIndex">
            <input type="checkbox" id="fixIndex" onChange={this.toggleContentDisplay} />
            Fix.index
          </label>
          <input type="number" id="fixedIndex" disabled={this.state.displayDataWindow ? false : true} />
        </div>
        <div className="Section__bottom" >
          <div className="dataTables_wrapper">
            {this.state.displayDataWindow
              ? <MDBTable
                fixed
                scrollY
                striped
                hover
                bordered
                small
              >
                <MDBTableHead columns={this.state.tableData.columns} />
                <MDBTableBody rows={this.state.tableData.rows} />
              </MDBTable>
              : <MDBTable
                style={{ opacity: 0 }}
                fixed
                scrollY
                striped
                hover
                bordered
                small
              >
                <MDBTableHead />
                <MDBTableBody />
              </MDBTable>
            }
          </div>
        </div>
      </div>
    )
  }
}
