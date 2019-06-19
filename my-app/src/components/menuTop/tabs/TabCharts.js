import React, { Component } from 'react';
import {Dropdown, Button, RadioGroup, Modal, Switch } from 'react-materialize';
import chartState from '../../chartContent/some'
// import {onClickButton} from '../../chartContent/Chart'

class TabCharts extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	    	chartDarkMode: false,
	    	modeProgect: 'candleMode',
	    	options: chartState.options,
          series: chartState.series,
	    };
	}

	pickProgectMode = (e) => {
		let mode = e.target.value
		this.setState({
			modeProgect: mode
		})
	} 

	chartDarkMode = (e) => {
		this.setState({
			chartDarkMode: !this.state.chartDarkMode
		})
	}

    render () {
	
	const addNewChartDropDown	= <Button className="nav-item__toolsList horizontalList">
									<i className="fa fa-plus-square"></i> 
									<p>Add New Chart</p>
									<i className="fa fa-sort-down"></i> 
								</Button>

	const addRangeBarDropDown	= <Button className="nav-item__toolsList horizontalList">
									<i className="fa fa-plus-square"></i> 
									<p>Add Range Bar Chart</p>
									<i className="fa fa-sort-down"></i> 
								</Button>

	const addRenkoBarDropDown	= <Button className="nav-item__toolsList horizontalList">
									<i className="fa fa-plus-square"></i> 
									<p>Add Renko Bar Chart</p>
									<i className="fa fa-sort-down"></i> 
								</Button>

	const addProfitDropDown		= <Button className="nav-item__toolsList horizontalList">
									<i className="fa fa-plus-square"></i> 
									<p>Add Profit Chart</p>
									<i className="fa fa-sort-down"></i> 
								</Button>

	const chartSettings			= <Button type="button" className="nav-item__toolsList flex-column">
									<i className="fa fa-wrench fa-3x mb-2"></i>
		   	 						<p>Chart setting</p>
								</Button>

	return (
	   	 <div className=" scroll">
	   	 	<div className="nav-item pt-2" >
				<div className="nav-item__main d-flex flex-column align-items-start">
 
					<Dropdown   options={{
									coverTrigger: false
								}} 
								trigger={addNewChartDropDown}
					>
						<a href="index.html">Manage timeframes</a>
					</Dropdown>
					<Dropdown   options={{
									coverTrigger: false
								}} 
								trigger={addRangeBarDropDown}
					>
						<a href="index.html">Manage timeframes</a>
					</Dropdown>
					<Dropdown   options={{
									coverTrigger: false
								}} 
								trigger={addRenkoBarDropDown}
					>
						<a href="index.html">Manage timeframes</a>
					</Dropdown>
					<Dropdown   options={{
									coverTrigger: false
								}} 
								trigger={addProfitDropDown}
					>
						<a href="index.html">Manage timeframes</a>
					</Dropdown>
				</div>

				<div className="nav-item__empty">
		   	 		<p>New Charts</p>
	   	 		</div>
	   	 	</div>  

	   	 	<div className="nav-item">
				<div className="nav-item__main hiddenInput d-flex flex-column align-items-start" >
					<RadioGroup
					  name="size"
					  label="T-Shirt Size"
					  onChange={this.pickProgectMode}
					  options={[{label: 'Candle Mode',value: 'candleMode'},
					  			{label: 'Bars Mode',value: 'barsMode'},
					  			{label: 'Lines Mode',value: 'linesMode'}]}
					/>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Create Project</p>
	   	 		</div>
	   	 	</div> 

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-row align-items-start">
					<button type="button">
						<i className="fa fa-search-plus fa-3x"></i>
		   	 			<p>Zoom in</p>
					</button>
					<button type="button">
						<i className="fa fa-search-minus fa-3x"></i>
		   	 			<p>Zoom Out</p>
					</button>
					<button type="button">
						<i className="fa fa-search fa-3x"></i>
		   	 			<p>Search <br /> Date/Time</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Zoom & Search</p>
	   	 		</div>
	   	 	</div> 

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start">
 
					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-save fa-2x"></i>
		   	 			<p>Save template</p>
					</button>

					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-edit fa-2x"></i>
		   	 			<p>Edit template</p>
					</button>

					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-table fa-2x"></i>
		   	 			<p>Default template</p>
					</button>
					
				</div>

				<div className="nav-item__empty">
		   	 		<p>Profiles</p>
	   	 		</div>
	   	    </div> 
	   	 	
	   		<div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start" >
 
					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-download fa-2x"></i>
		   	 			<p>Load Project</p>
					</button>

					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-save fa-2x"></i>
		   	 			<p>Save Project</p>
					</button>

					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-sync-alt fa-2x"></i>
		   	 			<p>Restore Default Profile</p>
					</button>
					
				</div>

				<div className="nav-item__empty">
		   	 		<p>Profiles</p>
	   	 		</div>
	   	    </div> 

	   	    <div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start">
					<button type="button" >
						<i className="fa fa-camera fa-4x"></i>
		   	 			<p>Take a screenshot</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Screenshot</p>
	   	 		</div>
	   	    </div>

	   	    <div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start">
 
					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-align-center fa-1x"></i>
		   	 			<p>Tile Vertically</p>
					</button>

					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-align-justify fa-1x"></i>
		   	 			<p>Tile Horizontally</p>
					</button>

					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-align-left fa-1x"></i>
		   	 			<p>Minimize All</p>
					</button>

					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-align-right fa-1x"></i>
		   	 			<p>Cascade</p>
					</button>
					
				</div>

				<div className="nav-item__empty">
		   	 		<p>Window Swttings</p>
	   	 		</div>
	   	    </div> 

	   	    <div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start" >
 
					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-adjust fa-1x"></i>
		   	 			<p>Autoscroll</p>
					</button>

					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-anchor fa-1x"></i>
		   	 			<p>Chart Offset</p>
					</button>

					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-magnet fa-1x"></i>
		   	 			<p>Magnet mode</p>
					</button>

					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-sync-alt fa-1x"></i>
		   	 			<p>Sync charts</p>
					</button>
					
				</div>

				<div className="nav-item__empty">
		   	 		<p>Charts</p>
	   	 		</div>
	   	    </div> 

	   	    <div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start">
					<Modal header="Modal Header" trigger={chartSettings}>
						<Switch offLabel="light" 
								onLabel="dark" 
								onChange={this.chartDarkMode}
						 />	
					</Modal>
				</div>
			{/*	<button onClick={onClickButton} name='ffffff'>ffff</button>*/}


				<div className="nav-item__empty">
		   	 		<p>Settings</p>
	   	 		</div>
	   	    </div>
	   	 </div>
	)}
}

export default TabCharts



