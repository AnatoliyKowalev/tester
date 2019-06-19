import React, { Component } from 'react';
import { Checkbox } from 'react-materialize';

class TabProject extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	       testingPreferences: false
	    };
	}

	switchTestingPreferences = (e) => {
		this.setState({
			testingPreferences: !this.state.testingPreferences
		})
	}

    render () {
	
	return (
	   	 <div className="scroll">
	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex">
					<button type="button">
						<i className="fa fa-plus-square fa-4x"></i>
		   	 			<p>New Project</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Create Project</p>
	   	 		</div>
	   	 	</div>  

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex">
					<button type="button">
						<i className="fa fa-folder-open fa-3x"></i>
		   	 			<p>Open Project</p>
					</button>
					<button type="button">
						<i className="fa fa-times-circle fa-3x"></i>
		   	 			<p>Close Project</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Open\Close Project</p>
	   	 		</div>
	   	 	</div>  

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex">
					<button type="button">
						<i className="fa fa-save fa-3x"></i>
		   	 			<p>Save Project</p>
					</button>
					<button type="button">
						<i className="fa fa-save fa-3x"></i>
		   	 			<p>Save Project as</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Save Project</p>
	   	 		</div>
	   	 	</div>   

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex">
					<button type="button">
						<i className="fa fa-sync-alt fa-3x"></i>
		   	 			<p>Restart Project</p>
					</button>
					<button type="button">
						<i className="fa fa-download fa-3x"></i>
		   	 			<p>Download & <br/> Update New HIstory</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Update Project</p>
	   	 		</div>
	   	 	</div>   

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex">
					<button type="button">
						<i className="fa fa-info-circle fa-3x"></i>
		   	 			<p>Project Information</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Information</p>
	   	 		</div>
	   	 	</div> 

	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex">
					<button type="button">
						<span className="d-flex">
							<i className="fa fa-arrow-up fa-3x"></i>
							<i className="fa fa-lira-sign fa-3x"></i>
						</span>
		   	 			<p>Deposit money</p>
					</button>
					<button type="button">
						<div className="d-flex">
							<i className="fa fa-arrow-down fa-3x"></i>
							<i className="fa fa-money-bill fa-3x"></i>
						</div>
		   	 			<p>Withdrow money</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Account Balance</p>
	   	 		</div>
	   	 	</div>

	   	 	<div className="nav-item">
				<div className="nav-item__main hiddenInput d-flex">
					
					<Checkbox
						 value="testing"
						 onChange={this.switchTestingPreferences}
						 label='Set pause when test started'
						 filledIn
						 checked={this.state.testingPreferences}
					/>
				
				</div>

				<div className="nav-item__empty">
		   	 		<p>Testing Preferences</p>
	   	 		</div>
	   	 	</div> 
	   	 </div>
	)}
}

export default TabProject



