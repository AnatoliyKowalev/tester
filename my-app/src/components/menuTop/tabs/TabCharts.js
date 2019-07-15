import React, { Component } from 'react';
import {Dropdown, Button, RadioGroup, Modal, Switch } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faCamera, faSearchPlus, faSearchMinus, faSearch, faSave, faEdit, faTable, faSyncAlt, faDownload,
				 faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faAdjust, faAnchor, faMagnet, faPlusSquare   
			 } from '@fortawesome/pro-solid-svg-icons';

class TabCharts extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	    	chartDarkMode: false,
	    	modeProgect: 'candleMode'
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
																<FontAwesomeIcon icon={faPlusSquare} size={'2x'} />
																<p>Add New Chart</p>
																<i className="fa fa-sort-down"></i> 
															</Button>

	const addRangeBarDropDown	= <Button className="nav-item__toolsList horizontalList">
															<FontAwesomeIcon icon={faPlusSquare} size={'2x'} />
																<p>Add Range Bar Chart</p>
																<i className="fa fa-sort-down"></i> 
															</Button>

	const addRenkoBarDropDown	= <Button className="nav-item__toolsList horizontalList">
																<FontAwesomeIcon icon={faPlusSquare} size={'2x'} />
																<p>Add Renko Bar Chart</p>
																<i className="fa fa-sort-down"></i> 
															</Button>

	const addProfitDropDown		= <Button className="nav-item__toolsList horizontalList">
															<FontAwesomeIcon icon={faPlusSquare} size={'2x'} />
																<p>Add Profit Chart</p>
																<i className="fa fa-sort-down"></i> 
															</Button>

	const chartSettings		 		= <Button className="nav-item__toolsList flex-column">
																<FontAwesomeIcon icon={faWrench} size="3x"/>
																<p>Chart setting</p>
															</Button>

	return (

	   	 <div className=" scroll">

	   	 	<div className="nav-item" >
					<div className="nav-item__main d-flex flex-column align-items-start">
						<Dropdown   options={{
										coverTrigger: false
									}} 
									trigger={addNewChartDropDown}
						>
							<a href="#/">Manage timeframes</a>
						</Dropdown>

						<Dropdown   options={{
										coverTrigger: false
									}} 
									trigger={addRangeBarDropDown}
						>
							<a href="#/">Manage timeframes</a>
						</Dropdown>

						<Dropdown   options={{
										coverTrigger: false
									}} 
									trigger={addRenkoBarDropDown}
						>
							<a href="#/">Manage timeframes</a>
						</Dropdown>

						<Dropdown   options={{
										coverTrigger: false
									}} 
									trigger={addProfitDropDown}
						>
							<a href="#/">Manage timeframes</a>
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
					<div className="nav-item__main d-flex flex-row">
						<button type="button">
							<FontAwesomeIcon icon={faSearchPlus} size="3x" />
							<p>Zoom in</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faSearchMinus} size="3x" />
							<p>Zoom Out</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faSearch} size="3x" />
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
							<FontAwesomeIcon icon={faSave} size="2x" />
							<p>Save template</p>
						</button>

						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faEdit} size="2x" />
							<p>Edit template</p>
						</button>

						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faTable} size="2x" />
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
							<FontAwesomeIcon icon={faDownload} size="2x" />
							<p>Load Project</p>
						</button>

						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faSave} size="2x" />
							<p>Save Project</p>
						</button>

						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faSyncAlt} size="2x" />
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
							<FontAwesomeIcon icon={faCamera} size="4x" />
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
							<FontAwesomeIcon icon={faAlignCenter} size="1x" />
							<p>Tile Vertically</p>
						</button>

						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faAlignJustify} size="1x" />
							<p>Tile Horizontally</p>
						</button>

						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faAlignLeft} size="1x" />
							<p>Minimize All</p>
						</button>

						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faAlignRight} size="1x" />
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
							<FontAwesomeIcon icon={faAdjust} size="1x" />
							<p>Autoscroll</p>
						</button>

						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faAnchor} size="1x" />
							<p>Chart Offset</p>
						</button>

						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faMagnet} size="1x" />
							<p>Magnet mode</p>
						</button>

						<button type="button" className="d-flex flex-row align-items-center">
							<FontAwesomeIcon icon={faSyncAlt} size="1x" />
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
	
					<div className="nav-item__empty">
		   	 		<p>Settings</p>
	   	 		</div>
				</div>
			</div>
	)}
}

export default TabCharts



