import React, { Component } from 'react';
import {Dropdown, Button } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faChartBar, faFileInvoice, faCode, faDollarSign, faRegistered, faCoins, faUpload, faClone ,faCopy, faBook  } from '@fortawesome/pro-solid-svg-icons';

class TabStore extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	       
	    };
	} 
 
    render () {
	
	const indicatorsDropDown		= <Button className="nav-item__toolsList flex-column">
																	<FontAwesomeIcon icon={faChartBar} size="2x" />
																	<p>Indicators</p>
																	<FontAwesomeIcon icon={faSortDown} />
																</Button>

	const strategiesDropDown		= <Button className="nav-item__toolsList flex-column">
																	<FontAwesomeIcon icon={faFileInvoice} size="2x" />
																	<p>Strategies</p>
																	<FontAwesomeIcon icon={faSortDown} />
																</Button>

	const utilitiesDropDown			= <Button className="nav-item__toolsList flex-column">
																	<FontAwesomeIcon icon={faCode} size="2x" />
																	<p>Utilities</p>
																	<FontAwesomeIcon icon={faSortDown} />
																</Button>

	return (
	   	<div className="scroll">

	   	 	<div className="nav-item">
					<div className="nav-item__main d-flex flex-row">
							<button type="button" >
								<FontAwesomeIcon icon={faDollarSign} size="3x" />
								<p>Upgrate <br/> tp FT4</p>
							</button>
							<button type="button" >
								<FontAwesomeIcon icon={faRegistered} size="3x" />
								<p>Register <br/> Program</p>
							</button>	 		
					</div>

					<div className="nav-item__empty">
	   	 			<p>Get the licence</p>
	   	 		</div>
	   	 	</div>  

	   		<div className="nav-item">
					<div className="d-flex h-100" > 

						<div className="nav-item__main d-flex flex-column">
							<Dropdown 
								options={{
									coverTrigger: false,
									constrainWidth: false
								}} 
								trigger={indicatorsDropDown}
							>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
							</Dropdown>
						</div>
	
						<div className="nav-item__main d-flex flex-column">
							<Dropdown 
								options={{
									coverTrigger: false,
									constrainWidth: false
								}} 
								trigger={strategiesDropDown}
							>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
							</Dropdown>
						</div>

						<div className="nav-item__main d-flex flex-column">
							<Dropdown
								options={{
									coverTrigger: false,
									constrainWidth: false
								}} 
								trigger={utilitiesDropDown}
							>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
								<a href="index.html">Manage timeframes</a>
							</Dropdown>
						</div>
					</div>

					<div className="nav-item__empty">
		   	 		<p>Add Icon</p>
	   	 		</div>
   	 	    </div>

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-row">
					<button type="button">
						<FontAwesomeIcon icon={faCoins} size="2x" />
						<p>Vip subscription</p>
					</button>
					<button type="button">
						<FontAwesomeIcon icon={faCoins} size="2x" />
						<p>Standart <br/> subscription</p>
					</button>	
					<button type="button">
						<FontAwesomeIcon icon={faUpload} size="2x" />
						<p>Activate <br/> Data <br/> Subscription</p>
					</button> 		
				</div>

				<div className="nav-item__empty">
	   	 			<p>Historical Data</p>
	   	 		</div>
	   	 	</div>  
 
 		 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-row">
					<button type="button">
						<FontAwesomeIcon icon={faClone} size="2x" />
						<p>Forex Trade <br/> Copier 2</p>
					</button>
					<button type="button">
						<FontAwesomeIcon icon={faCopy} size="2x" />
						<p>Forex Copier <br/> Remote 2</p>
					</button>			
				</div>

				<div className="nav-item__empty">
	   	 			<p>Trade Copying Software</p>
	   	 		</div>
	   	 	</div> 

   	 		<div className="nav-item">
				<div className="nav-item__main d-flex flex-row">
					<button type="button">
						<FontAwesomeIcon icon={faClone} size="2x" />
						<p>Visual <br/> Strategy <br/> Builder</p>
					</button>
					<button type="button">
						<FontAwesomeIcon icon={faClone} size="2x" />
						<p>Visual Indicator <br/> Builder</p>
					</button>			
				</div>

				<div className="nav-item__empty">
	   	 			<p>Visual Builders</p>
	   	 		</div>
	   	 	</div> 

   	 		<div className="nav-item">
				<div className="nav-item__main d-flex flex-row align-items-center">
					<button type="button">
						<FontAwesomeIcon icon={faBook} size="2x" />
						<p>Educational <br/> Course</p>
					</button>
					<button type="button">
						<FontAwesomeIcon icon={faBook} size="2x" />
						<p>Game</p>
					</button>			
				</div>

				<div className="nav-item__empty">
	   	 			<p>Education</p>
	   	 		</div>
	   	 	</div> 
	   	</div>
	)}
}

export default TabStore