
import React from 'react';
import Chart from './Chart';
import { getData } from "./utils"
import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		return (
			!this.state
				? <div>loading..</div> 
				: <TypeChooser id="chart">
					{type => <Chart chartMode={this.props.chartMode}	type={type} data={this.state.data} />}
					</TypeChooser>
		)
	}
}

export default ChartComponent