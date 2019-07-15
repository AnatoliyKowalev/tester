import React, { Component } from 'react';
import {Dropdown,Divider, Button, Select, action, Range } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faShoppingCart, faCartArrowDown, faExchange, faTimes, faSortDown, faArrowDown, faArrowUp,
				 faBackward, faForward, faCrosshairs, faAngleRight } from '@fortawesome/pro-solid-svg-icons';



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
															<p>Actions w/ orders</p> 
															<FontAwesomeIcon icon={faSortDown} />
														</Button>

	const timeframeDropDown 	= <Button className="nav-item__toolsList bottomList">
															<p>Timeframe</p>
															<FontAwesomeIcon icon={faSortDown} />
														</Button>

	const testingDropDown 		= <Button className="nav-item__toolsList bottomList">
																<p>Testing</p>
																<FontAwesomeIcon icon={faSortDown} />  
															</Button>

	const testingSubDropDown 	= <a href="#/" className="">
																<p>Step size</p>
																<FontAwesomeIcon icon={faAngleRight} />
												
															</a>

	return (

		<div className="scroll">

			<div  className="nav-item">

				<div className="d-flex nav-item__main">
					<button type="button" onClick={this.testActions}>
						<FontAwesomeIcon icon={this.state.testActions ? faPlay : faPause} size="4x" />
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
						<FontAwesomeIcon icon={faShoppingCart} size="2x" />
							<p>Market Order</p>
						</button>
						<button type="button" >
							<FontAwesomeIcon icon={faCartArrowDown} size="2x" />
							<p>Pending Order</p>
						</button>
						<button type="button" >
						<FontAwesomeIcon icon={faExchange} size="2x" />
							<p>Modify Order</p>
						</button>
						<button type="button" >
						<FontAwesomeIcon icon={faTimes} size="2x" />
							<p>Market Order</p>
						</button>
				</div>

				<div className="nav-item__bottom">
						<Dropdown options={{
						coverTrigger: false, alignment: 'right'
					}} trigger={actionsDropDown}>
						<a href="#/">Close All Positions and Orders</a>
						<a href="#/">Open group of orders</a>
						<a href="#/">Duplicate Position</a>
						<Divider/>
						<a href="#/">Move Stop Loss to Breackeven</a>
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
						<option value="1">
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
							<FontAwesomeIcon icon={faArrowUp} size="3x" />
						</button>
						<button type="button" >
							<FontAwesomeIcon icon={faArrowDown} size="3x" /> 
						</button>
					</div>
				</div>

				<div className="nav-item__bottom">
					<Dropdown	options={{
								coverTrigger: false
							}} trigger={timeframeDropDown}
					>
						<a href="#/">Manage timeframes</a>
					</Dropdown>
				</div>
			</div>  

			<div className="nav-item">
				<div className="d-flex nav-item__main flex-column">
					<div>
					<button type="button">
						<FontAwesomeIcon icon={faBackward} size="2x" />
							<p>Step back <br/> 1 bar</p>
						</button>
						<button type="button" >
							<FontAwesomeIcon icon={faForward} size="2x" />
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
					<a href="#/">Manage timeframessss</a>
					<Divider/>
					<Dropdown   
						options={{
							coverTrigger: false, hover: true
						}} 
						trigger={testingSubDropDown}
					>
						<a href="#/">Manage timeframes</a>
						<a href="#/">Manage timeframes</a>
						<a href="#/">Manage timeframes</a>
					</Dropdown>
				</Dropdown>
			</div>
			</div> 

			<div className="nav-item">
					<div className="nav-item__main d-flex">
					<button type="button">
						<FontAwesomeIcon icon={faCrosshairs} size="3x" />
						<p>Crosshair pointer</p>
					</button>
					<button type="button" >
						<FontAwesomeIcon icon={faCrosshairs} size="3x" />
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



