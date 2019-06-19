import React, { Component } from 'react';
import {Dropdown, Button } from 'react-materialize';

class TabStore extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	       
	    };
	} 
 
    render () {
	
const indicatorsDropDown		= <Button className="nav-item__toolsList flex-column">
									<i className="fa fa-chart-bar fa-2x"></i>
					   	 			<p>Indicators</p>
					   	 			<i className="fa fa-sort-down"></i> 
								</Button>

const strategiesDropDown		= <Button className="nav-item__toolsList flex-column">
									<i className="fa fa-android fa-2x "></i>
					   	 			<p>Strategies</p>
					   	 			<i className="fa fa-sort-down"></i> 
								</Button>

const utilitiesDropDown			= <Button className="nav-item__toolsList flex-column">
									<i className="fa fa-code fa-2x"></i>
					   	 			<p>Utilities</p>
					   	 			<i className="fa fa-sort-down"></i> 
								</Button>


	return (
	   	<div className="scroll">

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-row">
						<button type="button" >
			   	 			<i className="fa fa-dollar-sign fa-3x"></i>
			   	 			<p>Upgrate <br/> tp FT4</p>
			   	 		</button>
			   	 		<button type="button" >
			   	 			<i className="fa fa-registered fa-3x"></i>
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
						<Dropdown   options={{
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
						<Dropdown   options={{
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
						<Dropdown   options={{
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
		   	 			<i className="fa fa-coins fa-2x"></i>
		   	 			<p>Vip subscription</p>
		   	 		</button>
		   	 		<button type="button">
		   	 			<i className="fa fa-coins fa-2x"></i>
		   	 			<p>Standart <br/> subscription</p>
		   	 		</button>	
		   	 		<button type="button">
		   	 			<i className="fa fa-upload fa-2x"></i>
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
		   	 			<i className="fa fa-clone fa-2x"></i>
		   	 			<p>Forex Trade <br/> Copier 2</p>
		   	 		</button>
		   	 		<button type="button">
		   	 			<i className="fa fa-copy fa-2x"></i>
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
		   	 			<i className="fa fa-clone fa-2x"></i>
		   	 			<p>Visual <br/> Strategy <br/> Builder</p>
		   	 		</button>
		   	 		<button type="button">
		   	 			<i className="fa fa-clone fa-2x"></i>
		   	 			<p>Visual Indicator <br/> Builder</p>
		   	 		</button>			
				</div>

				<div className="nav-item__empty">
	   	 			<p>Visual Builders</p>
	   	 		</div>
	   	 	</div> 

   	 		<div className="nav-item">
				<div className="nav-item__main d-flex flex-row align-items-start">
					<button type="button" >
		   	 			<i className="fa fa-book fa-2x"></i>
		   	 			<p>Educational <br/> Course</p>
		   	 		</button>
		   	 		<button type="button" >
		   	 			<i className="fa fa-book fa-2x"></i>
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