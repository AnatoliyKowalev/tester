import React from 'react';
// import Chart from 'react-apexcharts'


// import {connect} from 'react-redux'
// import switchMode from './../../reducers/switchChartMode'
// import {setLightMode} from './../../actions/lightMode'

// const mapStateToProps = state => ({
//   options: state.options,
//   series: state.series,
//   chartHeight: state.chartHeight
// });



//////////////////////////////////////////
class CandleStickChart extends React.Component {
   
  constructor(props){
		super(props);
		this.state = {
      // chartHeight: props.chartState.chartState.chartHeight,
      // options: props.chartState.chartState.options,
      // series: props.chartState.chartState.series
    }
  }
  
render(props) {
  return ( 
   
      <div id="chart"  >
        
        {/* <Chart  options={this.state.options}  
                series={this.state.series} 
                type="candlestick" 
                height={this.state.chartHeight}
                className="chartWindow"
        />

        <Chart  options={this.state.options}  
              series={this.state.series} 
              type="candlestick" 
              height={this.state.chartHeight}
              className="chartWindow"
         />

        <Chart  options={this.state.options}  
              series={this.state.series} 
              type="candlestick" 
              height={this.state.chartHeight}
              className="chartWindow"
         /> */}
    
      </div>
);
}
  
}


export default CandleStickChart

// export default connect(mapStateToProps, {switchMode, setLightMode })(CandleStickChart);


// <Chart  options={props.options}  
// series={props.series} 
// type="candlestick" 
// height={props.chartHeight}
// />