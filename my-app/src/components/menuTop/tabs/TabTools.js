import React, { Component } from 'react';
import {Dropdown, Button, Checkbox } from 'react-materialize';

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
			   	 					<i className="fa fa-sort-down"></i> 
	 								<p>Panels</p>
								</Button>

	return (
		   	 <div className="scroll">
		   	 	
				<div className="nav-item">
					<div className="d-flex nav-item__main">
						<button>
							<i className="fa fa-list fa-3x"></i>
	   	 					<p>Show  Panels</p>
						</button>
					</div>
					
					<div className="nav-item__empty">
		   	 			<Dropdown   options={{
										coverTrigger: false,
										constrainWidth: false
									}} 
									trigger={panelsDropDown}
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
				   	 			<i className="fa fa-cart-plus fa-2x"></i>
				   	 			<p>Default <br/> orders</p>
				   	 		</button>
				   	 		<button type="button" >
				   	 			<i className="fa fa-keyboard fa-2x"></i>
				   	 			<p>Hot <br/> keys</p>
				   	 		</button>
			   	 			<button type="button" >
				   	 			<i className="fa fa-music fa-2x"></i>
				   	 			<p>Sounds</p>
				   	 		</button>
			   	 			<button type="button" >
				   	 			<i className="fa fa-sync-alt fa-2x"></i>
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
				   	 			<i className="fa fa-language fa-2x"></i>
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



