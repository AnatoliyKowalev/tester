import React, { Component } from 'react';
import {Dropdown,Button } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCaretDown, faList, faPlusSquare, faSyncAlt, faCubes } from '@fortawesome/pro-solid-svg-icons';

class TabIndicators extends Component {

	constructor(props){
	    super(props);
	    this.state = {

	    };
	}
	
    render () {
	
     const allDropDown				= <Button className="nav-item__toolsList flex-column">
																	<div className="d-flex flex-row align-items-center">
																		<FontAwesomeIcon icon={faChartLine} size="2x" />
																		<p>All</p>
																	</div>	
																	<FontAwesomeIcon icon={faCaretDown} />
																</Button> 

	const trendDropDown					= <Button className="nav-item__toolsList flex-column">
																	<div className="d-flex flex-row align-items-center">
																		<FontAwesomeIcon icon={faChartLine} size="2x" />
																		<p>Trend</p>
																	</div>
																	<FontAwesomeIcon icon={faCaretDown} />
																</Button>

	const volumeDropDown				= <Button className="nav-item__toolsList flex-column">		
																	<div className="d-flex flex-row align-items-center">
																		<FontAwesomeIcon icon={faChartLine} size="2x" />
																		<p>Volume</p>
																	</div>
																	<FontAwesomeIcon icon={faCaretDown} />
																</Button>	

	const oscillatorsDropDown		= <Button className="nav-item__toolsList flex-column">
																	<div className="d-flex flex-row align-items-center">
																		<FontAwesomeIcon icon={faChartLine} size="2x" />
																		<p>Oscillators</p>
																	</div>
																	<FontAwesomeIcon icon={faCaretDown} />
																</Button>

	const adaptiveDropDown			= <Button className="nav-item__toolsList flex-column">	
																	<div className="d-flex flex-row align-items-center">
																		<FontAwesomeIcon icon={faChartLine} size="2x" />
																		<p>Adaptive</p>
																	</div>	
																	<FontAwesomeIcon icon={faCaretDown} />
																</Button>

	const volatilityDropDown		= <Button className="nav-item__toolsList flex-column">		
																	<div className="d-flex flex-row align-items-center">
																		<FontAwesomeIcon icon={faChartLine} size="2x" />
																		<p>Volatility</p>
																	</div>
																	<FontAwesomeIcon icon={faCaretDown} />
																</Button>

	const customDropDown				= <Button className="nav-item__toolsList flex-column">			
																	<div className="d-flex flex-row align-items-center">
																		<FontAwesomeIcon icon={faChartLine} size="2x" />
																		<p>Custom</p>
																	</div>
																	<FontAwesomeIcon icon={faCaretDown} />
																</Button>

	return (
	   	<div className="scroll">
	   	 	
	   	 	<div className="nav-item">
	   	 		<div className="d-flex h-100">
   	 				<div className="nav-item__main d-flex flex-row align-items-center">
						<button  className="d-flex flex-column align-items-center">
							<FontAwesomeIcon icon={faList} size="2x" />
							<p>Curent Chart <br /> Indicators</p>
						</button>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-center">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={allDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-center">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={trendDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-center">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={volumeDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-center">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={oscillatorsDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-center">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={adaptiveDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-center">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={volatilityDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-row align-items-center">
						<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={customDropDown}
						>
							<a href="index.html">Manage timeframes</a>
						</Dropdown>
					</div>

					<div className="nav-item__main d-flex flex-column align-items-center">
						<button type="button" className="d-flex flex-column align-items-center">
							<FontAwesomeIcon icon={faPlusSquare} size="3x" />
							<p>Install New <br /> Indicator</p>
						</button>
					</div>
			   	 
				</div>
			
				<div className="nav-item__empty"  >
		   	 		<p>Add Indicator</p>
	   	 		</div>
	   	 	</div> 

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-row align-items-center">
					<button type="button" className="d-flex flex-column align-items-center">
						<FontAwesomeIcon icon={faSyncAlt} size="3x" />
						<p>MT4 Indicator <br/> Converter</p>
					</button>
					<button type="button" className="d-flex flex-column align-items-center">
						<FontAwesomeIcon icon={faCubes} size="3x" />
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