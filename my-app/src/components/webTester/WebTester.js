import React, { Component, lazy, Suspense } from 'react'
const MenuTop = lazy(() => import('../menuTop/MenuTop'));
const LeftBar = lazy(() => import('../leftBar/LeftBar'));
const BottomMenu = lazy(() => import('../bottomMenu/BottomMenu'));
const ChartComponent = lazy(() => import('../chartContent/chart/ChartComponent'));
// import {getData} from '...';


class WebTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartMode: false,
    };
  }

  // componentDidMount() {
  // this.props.getData()
  // }


  changeChartMode = checked => this.setState({ chartMode: checked })

  render() {
    // let {charts} = this.props;
    // let {chartData} = charts;

    return (
      <Suspense fallback={<div>loading...</div>}>
        <div id="webTester">
          <section id="topMenu">
            <MenuTop changeChartMode={this.changeChartMode} chartMode={this.state.chartMode} />
          </section>
          <LeftBar />
          <section className={`chartContainer ${this.state.chartMode ? 'lightTheme' : 'darkTheme'}`}>
            <ChartComponent chartMode={this.state.chartMode} />
          </section>
          <BottomMenu />
        </div>
      </Suspense>
    )
  }

}

const mapStateToProps = state => ({
  chart: state.chart
})

export default WebTester
// export default connect(mapStateToProps, {getData})(WebTester)