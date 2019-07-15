import React, { Component } from 'react'
import { Checkbox, TextInput, Table } from 'react-materialize';

export default class DataWindow extends Component {
  constructor(props){
		super(props);
		this.state = {
      fixedIndex: false,
      dataWindowInfo: [
        {
          name: 'EURUSD, H4',
          date: '2018.04.06',
          time: '00:04:04',
          openPrice: '1.22421',
          maxBar: '1.22499',
          minBar: '1.22211',
          closePrice: '1.22791',
          volume: '275840909999',
          indexBar: '16'
        }
      ]
		};
  }

  componentDidMount() {
    this.hideContent();
  }

  ChangefixedIndex = () => {
    this.setState({
      fixedIndex: !this.state.fixedIndex
    })
    this.state.fixedIndex ? this.hideContent() : this.showContent()
   
  }

   hideContent = () => {
    document.getElementById('dataWindowInfo').style.display = 'none';
    document.getElementById('fixedIndex').disabled = true;
  }

   showContent = () => {
    document.getElementById('dataWindowInfo').style.display = 'table';
    document.getElementById('fixedIndex').disabled = false;

  }

  makeDataWindowSection = () => {
    return(
      <div className="window-wrapper">
        
      <Table id="dataWindowInfo">
        <tbody>
         <tr>
          <td className="w w-75">
            Parametr
          </td>
          <td>
            Value
          </td>
          </tr>

          <tr>
            <th>
              GBPUSD
            </th>
            <th></th>
          </tr>

        </tbody>
      </Table>
      </div>
     
    )
  }

  render() {

    return (
      <div className="Section" >
        <div className="Section-name">Data window</div>
        <div className="Section__top">
          <Checkbox value="Fix.index" label="Fix.index" onChange={this.ChangefixedIndex} />
          <TextInput type="number" id="fixedIndex" />         
        </div>
        <div className="Section__bottom">
          {this.makeDataWindowSection()}
        </div>

       
      </div>
    )
    
  }
}
