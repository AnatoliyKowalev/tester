import React, { Component } from 'react';
import { Switch } from 'react-materialize';

class TabStrategies extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	        strategiesExecution: false,
	    };
	}

	switchStrategiesExecution = (e) => {
		this.setState({
			strategiesExecution: !this.state.strategiesExecution
		})
	}
	
    render () {
	
	return (
	   	<div className="scroll">
	   	 	
	   		<div className="nav-item">
	   			<div className="d-flex flex-row align-items-start h-100">
	   				<div className="nav-item__main d-flex">
						<button type="button">
							<i className="fa fa-list fa-3x"></i>
			   	 			<p>List of <br/> Strategies</p>
						</button>
					</div>
					<div className="nav-item__main d-flex">
						<Switch offLabel="Off" 
								onLabel="On" 
								onChange={this.switchStrategiesExecution}
						 />
					</div>
	   			</div>
				
				<div className="nav-item__empty">
		   	 		<p>Actions w/strategies</p>
	   	 		</div>
	   	 	</div>  

	   	 	<div className="nav-item">
	   			<div className="d-flex flex-row align-items-start h-100">

	   				<div className="nav-item__main d-flex">
						<button type="button">
							<i className="fa fa-chart-bar fa-3x"></i>
			   	 			<p>Strategy Optimizer</p>
						</button>
						<button type="button">
							<i className="fa fa-bolt fa-3x"></i>
			   	 			<p>Quick test</p>
						</button>
					</div>

					<div className="nav-item__main d-flex">
						<button type="button">
							<i className="fa fa-sync-alt fa-3x"></i>
			   	 			<p>MT4 Strategies <br/> Converter</p>
						</button>
						<button type="button">
							<i className="fa fa-cubes fa-3x"></i>
			   	 			<p>Visual Strategy Builder</p>
						</button>
					</div>
	   			</div>
				

				<div className="nav-item__empty"  >
		   	 		<p>Strategies' tools</p>
	   	 		</div>
	   	 	</div>  
	   	  
	   	  	<div className="nav-item">
	   	  	</div>
	   	 </div>
	)}
}

export default TabStrategies



