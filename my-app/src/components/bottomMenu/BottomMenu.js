import React, { Component } from 'react'
import { Tabs, Tab } from 'react-materialize';
import OpenPositionsSection from './bottomMenuSections/OpenPositionsSection';
import PendingOrdersSection from './bottomMenuSections/PendingOrdersSection';
import AccountHistorySection from './bottomMenuSections/AccountHistorySection';
import LogSection from './bottomMenuSections/LogSection';
import NewsSection from './bottomMenuSections/NewsSection';
import NotesSection from './bottomMenuSections/NotesSection';

export default class BottomMenu extends Component {
  constructor(props){
		super(props);
		this.state = {
      openedPositions: 0,
      pendingOrders: 0
    }
  }

  render() {
    return (
      <div className="bottomMenu">
          
         <Tabs className="tab-demo z-depth-1">
          <Tab title= {`Open positions [${this.state.openedPositions}]`} active>
            <OpenPositionsSection openPositionCount={this.state.openedPositions} />
          </Tab>
          <Tab title={`Pending Orders [${this.state.pendingOrders}]`}>
            <PendingOrdersSection pendingOrders={this.state.pendingOrders} />
          </Tab>
          <Tab title="Account history">
            <AccountHistorySection />
          </Tab>
          <Tab title="Log">
           <LogSection />
          </Tab>
          <Tab title="News">
            <NewsSection />
          </Tab>
          <Tab title="Notes"> 
            <NotesSection />
          </Tab>
      </Tabs>
      {/* <nav className="gg">
      <FontAwesomeIcon icon={faTimesSquare} className="close bottomMenuClose white" />
        <p id="activeTabName">ff</p>
      </nav> */}
      </div>
     
    )
  }
}
