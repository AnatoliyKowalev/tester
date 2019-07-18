import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faChartBar, faBolt, faSyncAlt, faCubes } from '@fortawesome/pro-solid-svg-icons';

class TabStrategies extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	        strategiesExecution: true,
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
								<FontAwesomeIcon icon={faList} size="3x" />
								<p>List of <br/> Strategies</p>
							</button>
						</div>
						<div className="nav-item__main d-flex flex-column align-items-center">
							<label className="switch mb-3" style={{width: '100px'}}>
								<p>{this.state.strategiesExecution ? 'off' : 'on'}</p>
								<input type="checkbox" defaultChecked={this.state.strategiesExecution} onChange={this.switchStrategiesExecution}/>
								<span className="slider round"></span>
							</label>
								<p>Enable/disable <br/> strategies' execution</p>
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
								<FontAwesomeIcon icon={faChartBar} size="3x" />
								<p>Strategy Optimizer</p>
							</button>
							<button type="button">
								<FontAwesomeIcon icon={faBolt} size="3x" />
								<p>Quick test</p>
							</button>
						</div>

						<div className="nav-item__main d-flex">
							<button type="button">
								<FontAwesomeIcon icon={faSyncAlt} size="3x" />
								<p>MT4 Strategies <br/> Converter</p>
							</button>
							<button type="button">
								<FontAwesomeIcon icon={faCubes} size="3x" />
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
			)
		}
}

export default TabStrategies



