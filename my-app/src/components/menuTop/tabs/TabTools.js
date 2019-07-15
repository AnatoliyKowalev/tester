import React, { Component } from 'react';
import {Dropdown, Button, Checkbox } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSortDown, faCartPlus, faKeyboard, faMusic, faSyncAlt, faLanguage  } from '@fortawesome/pro-solid-svg-icons';

class TabTools extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	       symbols: false,
	       tickCharts: false,
	       statistics: false,
	       scripts: false,
	       dataWindow: false,
	       openPositions: false,
	       pendingOrders: false,
	       accountHistory: false,
	       journal: false,
	       news: false,
	       notes: false
	    };
	}

	switchState = (e) => {
		let value = e.target.value
		this.setState({
			[value] :  !this.state[value]
		})
	}


    render () {

    const panelsDropDown		= <Button className="nav-item__toolsList flex-column">
																<FontAwesomeIcon icon={faSortDown} />
																<p>Panels</p>
															</Button>

			return (
		   	 <div className="scroll">
		   	 	
					<div className="nav-item">
						<div className="d-flex nav-item__main">
							<button>
								<FontAwesomeIcon icon={faList} size="3x" />
								<p>Show  Panels</p>
							</button>
						</div>
						
						<div className="nav-item__bottom">
								<Dropdown   
									options={{
										coverTrigger: false,
										constrainWidth: false,
										closeOnClick: false
									}} 
									trigger={panelsDropDown}
									className="includePadding"
								>
									<Checkbox
										value="symbols"
										label="Symbols"
										filledIn
										checked={this.state.symbols}
										onChange={this.switchState}
									/>
									<Checkbox
										value="tickCharts"
										label="Tick charts"
										filledIn
										checked={this.state.tickCharts}
										onChange={this.switchState}
									/>
									<Checkbox
										value="statistics"
										label="Statistics"
										filledIn
										checked={this.state.statistics}
										onChange={this.switchState}
									/>
									<Checkbox
										value="scripts"
										label="Scripts"
										filledIn
										checked={this.state.scripts}
										onChange={this.switchState}
									/>
									<Checkbox
										value="dataWindow"
										label="Data window"
										filledIn
										checked={this.state.dataWindow}
										onChange={this.switchState}
									/>
									<Checkbox
										value="openPositions"
										label="Open positions"
										filledIn
										checked={this.state.openPositions}
										onChange={this.switchState}
									/>
									<Checkbox
										value="pendingOrders"
										label="Pending orders"
										filledIn
										checked={this.state.pendingOrders}
										onChange={this.switchState}
									/>
									<Checkbox
										value="accountHistory"
										label="Account history"
										filledIn
										checked={this.state.accountHistory}
										onChange={this.switchState}
									/>
									<Checkbox
										value="journal"
										label="Journal"
										filledIn
										checked={this.state.journal}
										onChange={this.switchState}
									/>
									<Checkbox
										value="news"
										label="News"
										filledIn
										checked={this.state.news}
										onChange={this.switchState}
									/>
									<Checkbox
										value="notes"
										label="Notes"
										filledIn
										checked={this.state.notes}
										onChange={this.switchState}
									/>
							</Dropdown>

		   	 		</div>
					</div>

		   	 	<div className="nav-item">
						<div className="nav-item__main d-flex flex-row">
						
							<button type="button" >
									<FontAwesomeIcon icon={faCartPlus} size="2x" />
				   	 			<p>Default <br/> orders</p>
				   	 		</button>
				   	 		<button type="button" >
									<FontAwesomeIcon icon={faKeyboard} size="2x" />
				   	 			<p>Hot <br/> keys</p>
				   	 		</button>
			   	 			<button type="button" >
									<FontAwesomeIcon icon={faMusic} size="2x" />
				   	 			<p>Sounds</p>
				   	 		</button>
			   	 			<button type="button" >
									<FontAwesomeIcon icon={faSyncAlt} size="2x" />
				   	 			<p>Check <br/> for updates</p>
				   	 		</button>
			   	 		
						</div>

						<div className="nav-item__empty">
		   	 			<p>Options</p>
		   	 		</div>
		   	 	</div>  

		   	 	<div className="nav-item">
						<div className="nav-item__main d-flex flex-row">
						
							<button type="button" >
								<FontAwesomeIcon icon={faLanguage}  size="2x" />
								<p>Language</p>
							</button>
			   	 		
						</div>

						<div className="nav-item__empty">
		   	 			<p>Change language</p>
		   	 		</div>
		   	 	</div>  

		   	 </div>
	)}
}

export default TabTools



