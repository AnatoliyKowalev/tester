import React from 'react'
// import CandleStickChart from './Chart'
import ChartComponent from './chart/index'

let ChartContent = (props) => { 
 
    return (

		<div className="chartContainer">
		
		 	{/* <CandleStickChart chartState={props} /> */}
      <ChartComponent />
		</div>
    ); 
  }

export default ChartContent;
  