import React, { Component } from 'react';
import {Dropdown,Divider, Button, Select, action, Range } from 'react-materialize';

class TabHome extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	        testActions: true,
	        testingSpeed: {
	        	min: '0',
	        	currentSpeed: '0',
	        	max: '1000'
	        }
	    };
	}

	//changing of currentSpeed from Testing item
	testingSpeed = (e) => {
		let speed = e.target.value
		this.setState({
			testingSpeed: {
				min: '0',
				currentSpeed: speed,
				max: '1000'
			}
		})
	}
	//Status action BUTTON (PLAY \ PAUSE)
	testActions = (e) => {
		this.setState(prevState => ({
			testActions: !prevState.testActions
		}));
	}

    render () {

	const actionsDropDown		= <Button className="nav-item__toolsList bottomList">
									<p>Actions w/ orders</p><i className="fa fa-sort-down"></i> 
								</Button>

	const timeframeDropDown 	= <Button className="nav-item__toolsList bottomList">
									<p>Timeframe</p><i className="fa fa-sort-down"></i> 
								</Button>

	const testingDropDown 		= <Button className="nav-item__toolsList bottomList">
									<p>Testing</p><i className="fa fa-sort-down"></i> 
								</Button>

	const testingSubDropDown 	= <a href="index.html" className="">
									<p>Step size</p><i className="fa fa-angle-right"></i> 
								</a>

	return (
		   	 <div className="scroll">

		   	 	<div  className="nav-item">

	   	 			<div className="d-flex nav-item__main">
			   	 		<button type="button" onClick={this.testActions}>
			   	 			<i className={`fa ${this.state.testActions ? 'fa-play' : 'fa-pause'} fa-4x`}></i>
			   	 			<p>Sart/Pause Test</p>
			   	 		</button>
		   	 		</div>
		   	 		
		   	 		<div className="nav-item__empty">
		   	 			<p>Test actions</p>
		   	 		</div>

		   	 	</div> 

				<div className="nav-item">

					<div className="d-flex nav-item__main">
						<button type="button">
			   	 			<i className="fa fa-shopping-cart fa-2x"></i>
			   	 			<p>Market Order</p>
			   	 		</button>
			   	 		<button type="button" >
			   	 			<i className="fa fa-cart-arrow-down fa-2x"></i>
			   	 			<p>Pending Order</p>
			   	 		</button>
			   	 		<button type="button" >
			   	 			<i className="fa fa-exchange fa-2x"></i>
			   	 			<p>Modify Order</p>
			   	 		</button>
			   	 		<button type="button" >
			   	 			<i className="fa fa-times fa-2x"></i>
			   	 			<p>Market Order</p>
			   	 		</button>
					</div>

					<div className="nav-item__bottom">
		   	 			<Dropdown options={{
							coverTrigger: false, alignment: 'right'
						}} trigger={actionsDropDown}>
							<a href="index.html">Close All Positions and Orders</a>
							<a href="index.html">Open group of orders</a>
							<a href="index.html">Duplicate Position</a>
							<Divider/>
							<a href="index.html">Move Stop Loss to Breackeven</a>
						</Dropdown>
		   	 		</div>

				</div>

		   	 	<div className="nav-item">
					<div className="nav-item__main d-flex flex-column">
						<Select onChange={action} 	
								options={{
									coverTrigger: false, 
									autoTrigger: false
								}}
						>
							<option value="1" disabled>
								1 min
							</option>
							<option value="2">
								2 mins
							</option>
							<option value="3">
								3 mins
							</option>
							<option value="4">
								4 mins
							</option>
						</Select>
						<div className="mb-1">
							<button type="button" >
				   	 			<i className="fa fa-arrow-up fa-2x"></i>
				   	 		</button>
				   	 		<button type="button" >
				   	 			<i className="fa fa-arrow-down fa-2x"></i>
				   	 		</button>
			   	 		</div>
					</div>

					<div className="nav-item__bottom">
		   	 			<Dropdown	options={{
										coverTrigger: false
									}} trigger={timeframeDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
	   	 			</div>
		   	 	</div>  

		   	 	<div className="nav-item">
		   	 		<div className="d-flex nav-item__main flex-column">
		   	 			<div>
							<button type="button">
				   	 			<i className="fa fa-step-backward fa-2x"></i>
				   	 			<p>Step back <br/> 1 bar</p>
				   	 			
				   	 		</button>
				   	 		<button type="button" >
				   	 			<i className="fa fa-step-forward fa-2x"></i>
				   	 			<p>Step Forward <br/> 1 bar</p>
				   	 			
				   	 		</button>
			   	 		</div>
			   	 		<div className="d-flex flex-column">
			   	 			<Range  onChange={this.testingSpeed} 
			   	 					min={this.state.testingSpeed.min} 
			   	 					max={this.state.testingSpeed.max} 
			   	 					defaultValue={this.state.testingSpeed.currentSpeed} 
			   	 					name="testingSpeed" />
			   	 			<p>Testing speed</p>
			   	 		</div>
						
					</div> 

					<div className="nav-item__bottom mt-1">
						<Dropdown   options={{
										coverTrigger: false
									}} trigger={testingDropDown}
						>
							<a href="index.html">Manage timeframes</a>
							<Divider/>
							<Dropdown   options={{
											coverTrigger: false, hover: true
										}} 
										trigger={testingSubDropDown}
							>
								<a href="index.html">Manage timeframes</a>
							</Dropdown>
						</Dropdown>
					</div>
		   	 	</div> 

		   	 	<div className="nav-item">
		   	 			<div className="nav-item__main d-flex">
							<button type="button">
				   	 			<i className="fa fa-crosshairs fa-3x"></i>
				   	 			<p>Crosshair pointer</p>
				   	 		</button>
				   	 		<button type="button" >
				   	 			<i className="fa fa-crosshairs fa-3x"></i>
				   	 			<p>Crosshair sync</p>
				   	 		</button>
						</div>

						<div className="nav-item__empty" >
			   	 				<p>Pointer</p>
						</div>
		   	 	</div> 
		   	 	
		   	 </div>
	)}
}

export default TabHome



