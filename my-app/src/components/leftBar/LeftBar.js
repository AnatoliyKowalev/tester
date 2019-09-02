import React, { Component, lazy, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faChevronRight, faChevronLeft } from '@fortawesome/pro-solid-svg-icons';
import { leftBarWindows } from '../../utils/constants';

const Symbols = lazy(() => import('./leftBarSections/Symbols'));
const Ticks = lazy(() => import('./leftBarSections/Ticks'));
const Statistic = lazy(() => import('./leftBarSections/Statistic'));
const DataWindow = lazy(() => import('./leftBarSections/DataWindow'));
const Scripts = lazy(() => import('./leftBarSections/Scripts'));

class LeftBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leftBarFullscreen: false,
      topActiveTab: 'Scripts',
      bottomActiveTab: 'Symbols',
      topRolledWindow: false,
      bottomRolledWindow: false,
    };
  }

  swipeLeftBar = () => this.setState({
    leftBarFullscreen: !this.state.leftBarFullscreen
  })
  rollWindow = (e) => {
    if (e.currentTarget.dataset.value === 'top') {
      this.setState({ topRolledWindow: !this.state.topRolledWindow })
    } else {
      this.setState({ bottomRolledWindow: !this.state.bottomRolledWindow })
    }
  }

  selectTopTab = event => this.setState({
    topActiveTab: event.currentTarget.getAttribute('datatabname'),
  });

  selectBottomTab = event => this.setState({
    bottomActiveTab: event.currentTarget.getAttribute('datatabname')
  });

  render() {
    const windowTabsWindowTop = leftBarWindows[0].map((tabName, index) => {
      let active = this.state.topActiveTab === tabName && 'activeTab';
      return <li key={index}>
        <button
          datatabname={tabName}
          onClick={this.selectTopTab}
          className={`tab ${active}`}
        >
          {tabName}
        </button>
      </li>;
    });
    const windowTabsWindowBottom = leftBarWindows[1].map((tabName, index) => {
      let active = this.state.bottomActiveTab === tabName && 'activeTab'
      return <li key={index}>
        <button
          datatabname={tabName}
          onClick={this.selectBottomTab}
          className={`${active} tab`}
        >
          {tabName}
        </button>
      </li>;
    });

    return (
      <Suspense fallback={<div>loading...</div>}>
        <div className={`leftBar ${this.state.leftBarFullscreen ? 'fullScreen' : ''}`}  >
          <div className="swiper" onClick={this.swipeLeftBar}>
            {this.state.leftBarFullscreen
              ? <FontAwesomeIcon icon={faChevronLeft} size={'2x'} color="black" />
              : <FontAwesomeIcon icon={faChevronRight} size={'2x'} color="black" />}

          </div>
          <div className={`tabs-wrapper ${this.state.bottomRolledWindow ? 'rolled' : 'unrolled'}`}>
            <div className="close-panel">
              <div className="close-panel__item leftBarRollUp" data-value='top' onClick={this.rollWindow}>
                {
                  this.state.topRolledWindow
                    ? <FontAwesomeIcon icon={faMinus} />
                    : <FontAwesomeIcon icon={faPlus} />
                }
              </div>
            </div>
            <ul className="Tabs">
              {windowTabsWindowTop}
            </ul>
            {
              this.state.topActiveTab === 'Scripts'
                ? <Scripts />
                : <DataWindow />
            }
          </div>
          <div className={`tabs-wrapper ${this.state.topRolledWindow ? 'rolled' : 'unrolled'}`}>
            <div className="close-panel">
              <div className="close-panel__item leftBarRollUp" data-value='bottom' onClick={this.rollWindow}>
                {
                  this.state.bottomRolledWindow
                    ? <FontAwesomeIcon icon={faMinus} />
                    : <FontAwesomeIcon icon={faPlus} />
                }
              </div>
            </div>
            <ul className="Tabs">
              {windowTabsWindowBottom}
            </ul>
            {
              this.state.bottomActiveTab === 'Symbols'
                ? <Symbols />
                : this.state.bottomActiveTab === 'Ticks'
                  ? <Ticks />
                  : <Statistic />
            }
          </div>
        </div>
      </Suspense>
    )
  }
}

export default LeftBar