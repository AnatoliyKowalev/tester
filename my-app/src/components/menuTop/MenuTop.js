import React, { Component } from 'react';
import TabHome from './tabs/TabHome'
import TabProject from './tabs/TabProject'
import TabCharts from './tabs/TabCharts'
import TabGraphics from './tabs/TabGraphics'
import TabIndicators from './tabs/TabIndicators'
import TabStrategies from './tabs/TabStrategies'
import TabTools from './tabs/TabTools'
import TabStore from './tabs/TabStore'
import TabHelp from './tabs/TabHelp'

import { topMenuTabs } from './../../utils/constants';

class MenuTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  selectTab = event => this.setState({
    activeTab: +event.currentTarget.dataset.index
  });

  changeChartMode = (checked) => this.props.changeChartMode(checked)

  render() {

    const { chartMode } = this.props

    const getSelectedTab = tabIndex => {
      switch (tabIndex) {
        case 0:
          return <TabHome />;
        case 1:
          return <TabProject />;
        case 2:
          return <TabCharts changeChartMode={this.changeChartMode} chartMode={chartMode} />;
        case 3:
          return <TabGraphics />;
        case 4:
          return <TabIndicators />;
        case 5:
          return <TabStrategies />;
        case 6:
          return <TabTools />;
        case 7:
          return <TabStore />;
        case 8:
          return <TabHelp />;
        default:
          break;
      }
    };

    const tabs = topMenuTabs.map((tabName, index) => {
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
     <>
        <ul className="Tabs">
          {tabs}
        </ul>
        <div className="setOfTools">
          {tabContent}
        </div>
     </>
    );
  }
}

export default MenuTop;