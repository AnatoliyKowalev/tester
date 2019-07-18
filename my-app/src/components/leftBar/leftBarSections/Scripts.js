import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class Scripts extends Component {

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
        rows: []
      }
    };
  }

  render() {
    return (
      <div className="Section" >
        <div className="Section-name">Scripts</div>
        <div className="Section__bottom">
          <div className="dataTables_wrapper">
            <MDBTable
              fixed
              scrollY
              striped
              maxHeight='179px'
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
