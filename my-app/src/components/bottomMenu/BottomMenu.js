import React, { Component } from 'react'
import OpenPositionsSection from './bottomMenuSections/OpenPositionsSection';
import PendingOrdersSection from './bottomMenuSections/PendingOrdersSection';
import AccountHistorySection from './bottomMenuSections/AccountHistorySection';
import LogSection from './bottomMenuSections/LogSection';
import NewsSection from './bottomMenuSections/NewsSection';
import NotesSection from './bottomMenuSections/NotesSection';

import {bottomMenuTabs} from './../../utils/constants';

export default class BottomMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      openedPositions: 0,
      pendingOrders: 0
    }
  }

  selectTab = event => this.setState({
    activeTab: +event.currentTarget.dataset.index
  });

  

  render() {

    const getSelectedTab = tabIndex => {
      switch (tabIndex) {
        case 0:
          return <OpenPositionsSection openPositionCount={this.state.openedPositions} />;
        case 1:
          return <PendingOrdersSection pendingOrders={this.state.pendingOrders} />;
        case 2:
          return <AccountHistorySection />;
        case 3:
          return <LogSection/>;
        case 4:
          return <NewsSection/>;
        case 5:
          return <NotesSection />;
        default:
          break;
      }
    };

    const tabs = bottomMenuTabs.map((tabName, index) => {
      let active = this.state.activeTab === index ? 'activeTab' : '';
      return <li key={index}>
        <button
          data-index={index}
          onClick={this.selectTab}
          className={`${active} tab`}
        >
          {tabName}
        </button>
      </li>;
    });

    const tabContent = getSelectedTab(this.state.activeTab);


    return (
      <div className="bottomMenu">
            <ul className="Tabs">
              {tabs}
            </ul>
          
              {tabContent}
           


        {/* <Tabs className="tab-demo z-depth-1">
          <Tab title={`Open positions [${this.state.openedPositions}]`} active>
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
     */}
      </div>
    )
  }
}
 