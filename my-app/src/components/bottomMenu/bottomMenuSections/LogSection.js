import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

export default class LogSection extends Component {

  constructor(props){
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
          }
          
        ]
      }
    }
  }


  render() {
    return (
      <div className="Section" >
        <div className="Section-name">Logs</div>
        <div className="Section__bottom">
          {/* <MDBDataTable
            searching={false}
            scrollY
            scrollX
            maxHeight='146px'
            striped
            hover
            bordered
            small
            data={this.state.tableData}
          /> */}
          <MDBTable 
            fixed  
            scrollY 
            striped
            hover
            bordered
            small>
            <MDBTableHead columns={this.state.tableData.columns}/>
            <MDBTableBody rows={this.state.tableData.rows} />
          </MDBTable>
        </div>
  
     
     </div>
    
    )
  }
  
}
  