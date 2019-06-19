import React, { Component } from 'react';
import {Dropdown, Button, Checkbox } from 'react-materialize';

class TabGraphics extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	       verticalLine: false,
	       trendLine: false,
	       horizontalLine: false,
	       polyline: false,
	       ray: false,
	       selectAllObjects: false,
	       deselectObjects: false
	    };
	   
	}

	switchState = (e) => {
		let value = e.target.value
		this.setState({
			[value] :  !this.state[value]
		})
	}

    render () {
	
	const addIconDropDown			= <Button className="nav-item__toolsList flex-column">
								    	<i className="fa fa-check-square fa-2x"></i>
						   	 			<p>Add Icon</p>
										<i className="fa fa-sort-down"></i> 
									</Button>

    const addChannelDropDown		= <Button className="nav-item__toolsList horizontalList">
								    	<i className="fa fa-plus-square fa-2x"></i>
						   	 			<p>Add Channel</p>
						   	 			<i className="fa fa-sort-down"></i>
									</Button>

    const addFibonacciToolDropDown	= <Button className="nav-item__toolsList horizontalList">
								    	<i className="fa fa-plus-square fa-2x"></i>
						   	 			<p>Add Fibonacci Tool</p>
					   	 				<i className="fa fa-sort-down"></i>
									</Button>

	const addAndrewsDropDown		= <Button className="nav-item__toolsList horizontalList">
										<i className="fa fa-plus-square fa-2x"></i>
						   	 			<p>Add Andrew's Pitchfork</p>
					   	 				<i className="fa fa-sort-down"></i>
									</Button>

	return (
	   	 <div className="scroll">
	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start" >
					<button>
						<i className="fa fa-sticky-note fa-4x"></i>
		   	 			<p>Note</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Add a Note</p>
	   	 		</div>
	   	    </div>

	   	    <div className="nav-item">

		   	    <div className="d-flex h-100">
					<div className="nav-item__main hiddenInput d-flex flex-column align-items-start">
						
						<Checkbox
							 value="verticalLine"
							 onChange={this.switchState}
							 label='Vertical Line'
							 filledIn
							 checked={this.state.verticalLine}
						/>

						<Checkbox
							 value="horizontalLine"
							 onChange={this.switchState}
							 label='Horizontal Line'
							 filledIn
							 checked={this.state.horizontalLine}
						/>

						<Checkbox
							 value="trendLine"
							 onChange={this.switchState}
							 label='Trend Line'
							 filledIn
							 checked={this.state.trendLine}
						/>
					</div>

					<div className="nav-item__main hiddenInput d-flex flex-column align-items-start">
						
						<Checkbox
							 value="polyline"
							 onChange={this.switchState}
							 label='Polyline'
							 filledIn
							 checked={this.state.polyline}
						/>
						<Checkbox
							 value="ray"
							 onChange={this.switchState}
							 label='Ray'
							 filledIn
							 checked={this.state.ray}
						/>
					</div>
				</div>	
				
				<div className="nav-item__empty">
		   	 		<p>Add Line</p>
	   	 		</div>
	   	 	</div>

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start">
					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-vector-square fa-2x"></i>
		   	 			<p>Rectangle</p>
					</button>
					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-circle fa-2x"></i>
		   	 			<p>Ellipse</p>
					</button>
					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-sort-left fa-2x"></i>
		   	 			<p>Triangle</p>
					</button>
				</div>

				<div className="nav-item__empty"  >
		   	 		<p>Zoom & Search</p>
	   	 		</div>
	   	 	</div> 

   	 		<div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-center">
					<Dropdown   options={{
									coverTrigger: false,
									constrainWidth: false
								}} 
								trigger={addIconDropDown}
					>
						<a href="index.html">Manage timeframes</a>
					</Dropdown>
				</div>
				
				<div className="nav-item__empty">
		   	 		<p>Add Icon</p>
	   	 		</div>
	   	 	</div> 

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start" >

					<Dropdown   options={{
									coverTrigger: false
								}} 
								trigger={addChannelDropDown}
					>
						<a href="index.html">Manage timeframes</a>
					</Dropdown>
			
	
					<Dropdown   options={{
									coverTrigger: false
								}} 
								trigger={addFibonacciToolDropDown}
					>
						<a href="index.html">Manage timeframes</a>
					</Dropdown>

					<Dropdown   options={{
									coverTrigger: false
								}} 
								trigger={addAndrewsDropDown}
					>
						<a href="index.html">Manage timeframes</a>
					</Dropdown>
			
				</div>

				<div className="nav-item__empty">
		   	 		<p>Graphical Indicators</p>
	   	 		</div>
	   	 	</div>  

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start">
					<button type="button" className="d-flex flex-column align-items-center">
						<i className="fa fa-font fa-3x"></i>
		   	 			<p>Text labels</p>
					</button>
				</div>

				<div className="nav-item__empty"  >
		   	 		<p>Add Text</p>
	   	 		</div>
	   	 	</div> 

   	 		<div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start">
					<button type="button" className="d-flex flex-column align-items-center">
						<i className="fa fa-chart-line fa-3x"></i>
		   	 			<p>Wave <br/> Symbols</p>
					</button>
				</div>

				<div className="nav-item__empty"  >
		   	 		<p>Add Wave <br/> Symbols</p>
	   	 		</div>
	   	 	</div> 

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start">
					<button type="button" className="d-flex flex-column align-items-center">
						<i className="fa fa-list fa-3x"></i>
		   	 			<p>List of objects</p>
					</button>
				</div>

				<div className="nav-item__empty"  >
		   	 		<p>Objects</p>
	   	 		</div>
	   	 	</div> 
	   	 	
	   	 	<div className="nav-item">
		   	    <div className="d-flex h-100">
					<div className="nav-item__main hiddenInput d-flex flex-column align-items-start">
						<Checkbox
							value="selectAllObjects"
							onChange={this.switchSelectAllObjects}
							label='Select All Objects'
							filledIn
							checked={this.state.selectAllObjects}
						/>

						<Checkbox
							value="deselectObjects"
							onChange={this.switchDeselectObjects}
							label='Deselect Objects'
							filledIn
							checked={this.state.deselectObjects}
						/>
					</div>
				</div>	
				
				<div className="nav-item__empty">
		   	 		<p>Objects Selections</p>
	   	 		</div>
	   	 	</div>

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-column align-items-start">
					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-trash fa-2x"></i>
		   	 			<p>Delete Most Recent Objects</p>
					</button>
					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-trash fa-2x"></i>
		   	 			<p>Delete Selected</p>
					</button>
					<button type="button" className="d-flex flex-row align-items-center">
						<i className="fa fa-trash fa-2x"></i>
		   	 			<p>Delete All</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Objects Deletion</p>
	   	 		</div>
	   	 	</div> 
	   	    
	   	 </div>
	)}
}

export default TabGraphics



