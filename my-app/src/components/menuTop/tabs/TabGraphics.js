import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faCaretDown, faCheckSquare, faPlusSquare, faSortDown, faStickyNote, faVectorSquare, faCircle, 
	faCaretLeft, faFont, faChartLine, faList, faTrash 
} from '@fortawesome/pro-solid-svg-icons';

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

	switchState = e => {
		let value = e.target.value
		this.setState({
			[value] :  !this.state[value]
		})
	}

    render () {
			return (
				<div className="scroll">
					<div className="nav-item">
						<div className="nav-item__main d-flex flex-column align-items-start" >
							<button>
								<FontAwesomeIcon icon={faStickyNote} size="4x" className="mb-1" />
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
								<label htmlFor="verticalLine">
									<input 	
										onChange={this.switchState} 
										type="checkbox" 
										id="verticalLine" 
										value="verticalLine" 
										checked={this.state.verticalLine}/>
									Vertical Line
								</label>
								<label htmlFor="horizontalLine">
									<input 	
										onChange={this.switchState} 
										type="checkbox" 
										id="horizontalLine" 
										value="horizontalLine" 
										checked={this.state.horizontalLine}/>
									Horizontal Line
								</label>
								<label htmlFor="trendLine">
									<input 	
										onChange={this.switchState} 
										type="checkbox" 
										id="trendLine" 
										value="trendLine" 
										checked={this.state.trendLine}/>
									Trend Line
								</label>
							</div>

						<div className="nav-item__main hiddenInput d-flex flex-column align-items-start">
							<label htmlFor="polyline">
								<input 	
									onChange={this.switchState} 
									type="checkbox" id="polyline" 
									value="polyline" 
									checked={this.state.polyline}/>
								Polyline
							</label>
							<label htmlFor="ray">
								<input 	
									onChange={this.switchState} 
									type="checkbox" 
									id="ray" 
									value="ray" 
									checked={this.state.ray}/>
								Ray
							</label>
						</div>
					</div>	
					
					<div className="nav-item__empty">
							<p>Add Line</p>
						</div>
				</div>

					<div className="nav-item">
						<div className="nav-item__main d-flex flex-column align-items-start">
							<button type="button" className="d-flex flex-row align-items-center">
								<FontAwesomeIcon icon={faVectorSquare} size="2x" className="mr-2" />
								<p>Rectangle</p>
							</button>
							<button type="button" className="d-flex flex-row align-items-center">
								<FontAwesomeIcon icon={faCircle} size="2x" className="mr-2" />
								<p>Ellipse</p>
							</button>
							<button type="button" className="d-flex flex-row align-items-center">   
								<FontAwesomeIcon icon={faCaretLeft} size="2x" className="mr-2" />
								<p>Triangle</p>
							</button>
						</div>

						<div className="nav-item__empty"  >
							<p>Zoom & Search</p>
						</div>
					</div> 

					<div className="nav-item">
						<div className="nav-item__main d-flex flex-column align-items-center">
							<div className="dropDown vertical">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faCheckSquare} size="2x" className="mb-1" />
									Add Icon
									<FontAwesomeIcon icon={faSortDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
									<li><button>Duplicate Position</button></li>
									<hr/>
									<li><button>Move Stop Loss to Breackeven</button></li>
								</ul>
							</div>
						</div>
						
						<div className="nav-item__empty">
							<p>Add Icon</p>
						</div>
					</div> 

					<div className="nav-item">
						<div className="nav-item__main d-flex flex-column" >
								<div className="dropDown">
										<button className="dropTarget">
											<div className="d-flex flex-row align-items-center">
											<FontAwesomeIcon icon={faPlusSquare} size={'2x'} className="mr-2" />
											<p>Add  Chanell</p>
											</div>
											<FontAwesomeIcon icon={faCaretDown} />
										</button>
										<ul>
											<li><button>Close All Positions and Orders</button></li>
											<li><button>Open group of orders</button></li>
											<li><button>Duplicate Position</button></li>
											<hr/>
											<li><button>Move Stop Loss to Breackeven</button></li>
										</ul>
								</div>
								<div className="dropDown">
										<button className="dropTarget">
										<div className="d-flex flex-row align-items-center">
										<FontAwesomeIcon icon={faPlusSquare} size={'2x'} className="mr-2" />
											<p>Add Fibonacci Tool </p>
										</div>
										
											<FontAwesomeIcon icon={faCaretDown} />
										</button>
										<ul>
											<li><button>Close All Positions and Orders</button></li>
											<li><button>Open group of orders</button></li>
											<li><button>Duplicate Position</button></li>
											<hr/>
											<li><button>Move Stop Loss to Breackeven</button></li>
										</ul>
								</div>
								<div className="dropDown">
										<button className="dropTarget">
										<div className="d-flex flex-row align-items-center">
											<FontAwesomeIcon icon={faPlusSquare} size={'2x'} className="mr-2" />
											<p>Add Andrew's Pitchfork</p> 
											</div>
											<FontAwesomeIcon icon={faCaretDown} />
										</button>
										<ul>
											<li><button>Close All Positions and Orders</button></li>
											<li><button>Open group of orders</button></li>
											<li><button>Duplicate Position</button></li>
											<hr/>
											<li><button>Move Stop Loss to Breackeven</button></li>
										</ul>
								</div>
						</div>

						<div className="nav-item__empty">
							<p>Graphical Indicators</p>
						</div>
					</div>  

					<div className="nav-item">
						<div className="nav-item__main d-flex flex-column ">
							<button type="button" className="d-flex flex-column align-items-center justify-content-center">
								<FontAwesomeIcon icon={faFont} size="3x" className="mb-2" />
								<p>Text labels</p>
							</button>
						</div>

						<div className="nav-item__empty"  >
							<p>Add Text</p>
						</div>
					</div> 

					<div className="nav-item">
						<div className="nav-item__main d-flex flex-column align-items-start">
							<button type="button" className="d-flex flex-column align-items-center justify-content-center">
								<FontAwesomeIcon icon={faChartLine} size="3x" className="mb-2" />
								<p>Wave <br/> Symbols</p>
							</button>
						</div>

						<div className="nav-item__empty"  >
							<p>Add Wave <br/> Symbols</p>
						</div>
					</div> 

					<div className="nav-item">
						<div className="nav-item__main d-flex flex-column">
							<button type="button" className="d-flex flex-column align-items-center justify-content-center">
								<FontAwesomeIcon icon={faList} size="3x" className="mb-2" />
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
								<label htmlFor="selectAllObjects">
									<input 	onChange={this.switchState} type="checkbox" id="selectAllObjects" value="selectAllObjects" checked={this.state.selectAllObjects}/>
									Select All Objects
								</label>
								<label htmlFor="deselectObjects">
									<input 	onChange={this.switchState} type="checkbox" id="deselectObjects" value="deselectObjects" checked={this.state.deselectObjects}/>
									Deselect Objects
								</label>
							</div>
						</div>	
						
						<div className="nav-item__empty">
							<p>Objects Selections</p>
						</div>
					</div>

					<div className="nav-item">
						<div className="nav-item__main d-flex flex-column align-items-start">
							<button type="button" className="d-flex flex-row align-items-center">
								<FontAwesomeIcon icon={faTrash} size="2x" className="mr-2" />
								<p>Delete Most Recent Objects</p>
							</button>
							<button type="button" className="d-flex flex-row align-items-center">
								<FontAwesomeIcon icon={faTrash} size="2x" className="mr-2" />
									<p>Delete Selected</p>
							</button>
							<button type="button" className="d-flex flex-row align-items-center">
								<FontAwesomeIcon icon={faTrash} size="2x" className="mr-2" />
								<p>Delete All</p>
							</button>
						</div>

						<div className="nav-item__empty">
							<p>Objects Deletion</p>
						</div>
					</div> 
						
				</div>
			)
	}
}

export default TabGraphics



