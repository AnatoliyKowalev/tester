import React, { Component, lazy, Suspense } from 'react'

const MenuTop = lazy(() => import('../menuTop/MenuTop'));
const LeftBar = lazy(() => import('../leftBar/LeftBar'));
const BottomMenu = lazy(() => import('../bottomMenu/BottomMenu'));
const ChartComponent = lazy(() => import('../chartContent/chart/ChartComponent'));

class WebTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartMode: false,
    };
  }

  changeChartMode = checked => this.setState({chartMode: checked })

  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <div id="webTester">
          <section id="topMenu">
            <MenuTop changeChartMode={this.changeChartMode} chartMode={this.state.chartMode} />
          </section>
          <LeftBar />
          <section className={`chartContainer ${this.state.chartMode ? '' : 'darkTheme'}`}>
            <ChartComponent chartMode={this.state.chartMode} />
          </section>
          <BottomMenu />
        </div>
      </Suspense>
    )
  }

}

export default WebTester