import React, { Component } from 'react'
import OpenPositionsSection from './bottomMenuSections/OpenPositionsSection';
import PendingOrdersSection from './bottomMenuSections/PendingOrdersSection';
import AccountHistorySection from './bottomMenuSections/AccountHistorySection';
import LogSection from './bottomMenuSections/LogSection';
import NewsSection from './bottomMenuSections/NewsSection';
import NotesSection from './bottomMenuSections/NotesSection';

import Slider from "react-slick";
import { bottomMenuTabs } from './../../utils/constants';

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
    let settings = {
      dots: false,
      infinite: false,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      variableWidth: true,
      speed: 300,
      responsive: [
        {
          breakpoint: 481,
          settings: {
            className: "Tabs small-screen-menu",
            arrows: true,
            slidesToShow: 3,
          }
        }
      ]
    };
    const getSelectedTab = tabIndex => {
      switch (tabIndex) {
        case 0:
          return <OpenPositionsSection openPositionCount={this.state.openedPositions} />;
        case 1:
          return <PendingOrdersSection pendingOrders={this.state.pendingOrders} />;
        case 2:
          return <AccountHistorySection />;
        case 3:
          return <LogSection />;
        case 4:
          return <NewsSection />;
        case 5:
          return <NotesSection />;
        default:
          break;
      }
    };

    const tabs = bottomMenuTabs.map((tabName, index) => {
      let active = this.state.activeTab === index && 'activeTab';
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
        <Slider className="Tabs" {...settings}>
          {tabs}
        </Slider>
        {tabContent}
      </div>
    )
  }
}
