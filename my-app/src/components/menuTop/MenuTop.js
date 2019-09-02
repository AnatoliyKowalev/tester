import React, { Component, lazy, Suspense } from 'react';
import { topMenuTabs } from './../../utils/constants';

const Slider = lazy(() => import('react-slick'));
const TabHelp = lazy(() => import('./tabs/TabHelp'));
const TabStore = lazy(() => import('./tabs/TabStore'));
const TabTools = lazy(() => import('./tabs/TabTools'));
const TabStrategies = lazy(() => import('./tabs/TabStrategies'));
const TabIndicators = lazy(() => import('./tabs/TabIndicators'));
const TabGraphics = lazy(() => import('./tabs/TabGraphics'));
const TabCharts = lazy(() => import('./tabs/TabCharts'));
const TabProject = lazy(() => import('./tabs/TabProject'));
const TabHome = lazy(() => import('./tabs/TabHome'));

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
    let settings = {
      dots: false,
      infinite: false,
      arrows: false,
      slidesToShow: 9,
      slidesToScroll: 1,
      variableWidth: true,
      speed: 300,
      responsive: [
        {
          breakpoint: 481,
          settings: {
            className: "Tabs small-screen-menu",
            arrows: true,
            slidesToShow: 5,
          }
        }
      ]
    };

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
      <Suspense fallback={<div>loading...</div>}>
        <>
          <div className="clear-overflow">
            <Slider className="Tabs" {...settings}>
              {tabs}
            </Slider>
          </div>
          {tabContent}
        </>
      </Suspense>
    );
  }
}

export default MenuTop;