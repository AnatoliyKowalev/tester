import React, { Component } from 'react';
import {Dropdown,Button } from 'react-materialize';

class TabIndicators extends Component {

	constructor(props){
	    super(props);
	    this.state = {

	    };
	}
	
    render () {
	
     const allDropDown				= <Button className="nav-item__toolsList flex-column">				
										<i className="fa fa-chart-line fa-2x"></i>
				   	 					<p>All</p>
						   	 			<i className="fa fa-caret-down"></i>
									</Button> 

	const trendDropDown				= <Button className="nav-item__toolsList flex-column">				
										<i className="fa fa-chart-line fa-2x"></i>
				   	 					<p>Trend</p>
						   	 			<i className="fa fa-caret-down"></i>
									</Button>

	const volumeDropDown			= <Button className="nav-item__toolsList flex-column">				
										<i className="fa fa-chart-line fa-2x"></i>
				   	 					<p>Volume</p>
						   	 			<i className="fa fa-caret-down"></i>
									</Button>	

	const oscillatorsDropDown		= <Button className="nav-item__toolsList flex-column">				
											<i className="fa fa-chart-line fa-2x"></i>
					   	 					<p>Oscillators</p>
							   	 			<i className="fa fa-caret-down"></i>
									</Button>

	const adaptiveDropDown			= <Button className="nav-item__toolsList flex-column">				
											<i className="fa fa-chart-line fa-2x"></i>
					   	 					<p>Adaptive</p>
							   	 			<i className="fa fa-caret-down"></i>
									</Button>

	const volatilityDropDown		= <Button className="nav-item__toolsList flex-column">				
										<i className="fa fa-chart-line fa-2x"></i>
				   	 					<p>Volatility</p>
						   	 			<i className="fa fa-caret-down"></i>
									</Button>

	const customDropDown			= <Button className="nav-item__toolsList flex-column">				
										<i className="fa fa-chart-line fa-2x"></i>
				   	 					<p>Custom</p>
						   	 			<i className="fa fa-caret-down"></i>
									</Button>

	return (
	   	<div className="scroll">
	   	 	
	   	 	<div className="nav-item pt-2">
	   	 		<div className="d-flex h-100">
   	 				<div className="nav-item__main d-flex flex-row align-items-start">
						<button  className="d-flex flex-column align-items-center">
							<i className="fa fa-list fa-2x"></i>
			   	 			<p>Curent Chart <br /> Indicators</p>
						</button>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-start">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={allDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-start">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={trendDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-start">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={volumeDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-start">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={oscillatorsDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-start">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={adaptiveDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-start">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={volatilityDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-start">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={customDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-column align-items-start">
						<button type="button" className="d-flex flex-column align-items-center">
							<i className="fa fa-plus-square fa-3x"></i>
			   	 			<p>Install New <br /> Indicator</p>
						</button>
					</div>
			   	 
	   	 		</div>
			
				<div className="nav-item__empty"  >
		   	 		<p>Add Indicator</p>
	   	 		</div>
	   	 	</div> 

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-row align-items-start">
					<button type="button" className="d-flex flex-column align-items-center">
						<i className="fa fa-sync-alt fa-3x"></i>
		   	 			<p>MT4 Indicator <br/> Converter</p>
					</button>
					<button type="button" className="d-flex flex-column align-items-center">
						<i className="fa fa-cubes fa-3x"></i>
		   	 			<p>Virtual Indicator <br/> Builder</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Indicators' tools</p>
	   	 		</div>
	   	 	</div> 
    
	   	 </div>
	)}
}

export default TabIndicators