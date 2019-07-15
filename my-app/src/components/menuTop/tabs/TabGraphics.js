import React, { Component } from 'react';
import {Dropdown, Button, Checkbox } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faPlusSquare, faSortDown, faStickyNote, faVectorSquare, faCircle, faCaretLeft, faFont,
	faChartLine, faList, faTrash } from '@fortawesome/pro-solid-svg-icons';

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
	
	const addIconDropDown							= <Button className="nav-item__toolsList flex-column">
																				<FontAwesomeIcon icon={faCheckSquare} size="2x" />
																				<p>Add Icon</p>
																				<FontAwesomeIcon icon={faSortDown} />
																			</Button>

	const addChannelDropDown					= <Button className="nav-item__toolsList horizontalList">
																				<FontAwesomeIcon icon={faPlusSquare} size="2x" />
																				<p>Add Channel</p>
																				<FontAwesomeIcon icon={faSortDown} />
																			</Button>

	const addFibonacciToolDropDown		= <Button className="nav-item__toolsList horizontalList">
																				<FontAwesomeIcon icon={faPlusSquare} size="2x" />
																				<p>Add Fibonacci Tool</p>
																				<FontAwesomeIcon icon={faSortDown} />
																			</Button>

	const addAndrewsDropDown					= <Button className="nav-item__toolsList horizontalList">
																				<FontAwesomeIcon icon={faPlusSquare} size="2x" />
																				<p>Add Andrew's Pitchfork</p>
																				<FontAwesomeIcon icon={faSortDown} />
																			</Button>

	return (

	   	 <div className="scroll">

	   	 	<div className="nav-item">
					<div className="nav-item__main d-flex flex-column align-items-start" >
						<button>
							<FontAwesomeIcon icon={faStickyNote} size="4x" />
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
							<FontAwesomeIcon icon={faVectorSquare} size="2x" />
							<p>Rectangle</p>
						</button>
						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faCircle} size="2x" />
							<p>Ellipse</p>
						</button>
						<button type="button" className="d-flex flex-row align-items-center">   
							<FontAwesomeIcon icon={faCaretLeft} size="2x" />
							<p>Triangle</p>
						</button>
					</div>

					<div className="nav-item__empty"  >
		   	 		<p>Zoom & Search</p>
	   	 		</div>
	   	 	</div> 

   	 		<div className="nav-item">
					<div className="nav-item__main d-flex flex-column align-items-center">
						<Dropdown options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={addIconDropDown}
						>
							<a href="#/">Manage timeframes</a>
						</Dropdown>
					</div>
					
					<div className="nav-item__empty">
		   	 		<p>Add Icon</p>
	   	 		</div>
	   	 	</div> 

	   	 	<div className="nav-item">
					<div className="nav-item__main d-flex flex-column align-items-start" >

						<Dropdown options={{
										coverTrigger: false
									}} 
									trigger={addChannelDropDown}
						>
							<a href="#/">Manage timeframes</a>
						</Dropdown>
				
						<Dropdown options={{ 
										coverTrigger: false
									}} 
									trigger={addFibonacciToolDropDown}
						>
							<a href="#/">Manage timeframes</a>
						</Dropdown>

						<Dropdown options={{
										coverTrigger: false
									}} 
									trigger={addAndrewsDropDown}
						>
							<a href="#/">Manage timeframes</a>
						</Dropdown>
				
					</div>

					<div className="nav-item__empty">
		   	 		<p>Graphical Indicators</p>
	   	 		</div>
	   	 	</div>  

	   	 	<div className="nav-item">
					<div className="nav-item__main d-flex flex-column align-items-start">
						<button type="button" className="d-flex flex-column align-items-center">
							<FontAwesomeIcon icon={faFont} size="3x" />
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
							<FontAwesomeIcon icon={faChartLine} size="3x" />
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
							<FontAwesomeIcon icon={faList} size="3x" />
							<p>List of objects</p>
						</button>
					</div>

					<div className="nav-item__empty">
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
							<FontAwesomeIcon icon={faTrash} size="2x" />
							<p>Delete Most Recent Objects</p>
						</button>
						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faTrash} size="2x" />
								<p>Delete Selected</p>
						</button>
						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faTrash} size="2x" />
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



