import React, { Component } from 'react'
import { Tab, Tabs } from 'react-materialize';
import Symbols from './leftBarSections/Symbols'
import Ticks from './leftBarSections/Ticks'
import Statistic from './leftBarSections/Statistic'
import DataWindow from './leftBarSections/DataWindow'
import Scripts from './leftBarSections/Scripts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/pro-solid-svg-icons';


export default class LeftBar extends Component {

  // constructor(props){
	// 	super(props);
	// 	this.state = {
			
	// 	};
  // }
  
  render() {
    
    return (
    
      <div className="leftBar">
        <div className="tabs-wrapper unrolled">
        
          <div className="close-panel">
            {/* <div className="close-panel__item leftBarClose">
              <FontAwesomeIcon icon={faTimes} />
            </div> */}
            <div className="close-panel__item leftBarRollUp">
              <FontAwesomeIcon icon={faWindowMaximize} />
            </div>
          </div>
          

          <Tabs >
            <Tab title="Data Window">
              <DataWindow />
            </Tab>
            <Tab title="Scripts">
              <Scripts />
            </Tab>
          </Tabs>
        </div>
   
        <div className="tabs-wrapper unrolled">
          <div className="close-panel">
            {/* <div className="close-panel__item leftBarClose">
              <FontAwesomeIcon icon={faTimes} />
            </div> */}
            <div className="close-panel__item leftBarRollUp">
              <FontAwesomeIcon icon={faWindowMaximize} />
            </div>
          </div>
          <Tabs >
            <Tab title="Symbols">
              <Symbols />
            </Tab>
            <Tab title="Ticks">
              <Ticks />
            </Tab>
            <Tab title="Statistic">
            <Statistic />
            </Tab>
          </Tabs>
         
        </div>
        

      </div>
      
    )
  }
}
