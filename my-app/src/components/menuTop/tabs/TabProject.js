import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faSync, faPlusSquare, faFolderOpen, faTimesCircle, faSave, faDownload, faInfoCircle, 
	faArrowUp, faArrowDown, 	faMoneyBillAlt 
} from '@fortawesome/pro-solid-svg-icons';


class TabProject extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	       testingPreferences: false
	    };
	}

	switchTestingPreferences = e =>this.setState({testingPreferences: !this.state.testingPreferences})
	
	render () {
		return (
			<div className="scroll">
				<div className="nav-item">
					<div className="nav-item__main d-flex">
						<button type="button">
							<FontAwesomeIcon icon={faPlusSquare} size="4x" className="mb-1" />
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
							<FontAwesomeIcon icon={faFolderOpen} size="3x" className="mb-2" />
							<p>Open Project</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faTimesCircle} size="3x" className="mb-2" />
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
							<FontAwesomeIcon icon={faSave} size="3x" className="mb-2" />
							<p>Save Project</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faSave} size="3x" className="mb-2" />
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
							<FontAwesomeIcon icon={faSync} size="3x" className="mb-2" />
							<p>Restart Project</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faDownload} size="3x" className="mb-2" />
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
							<FontAwesomeIcon icon={faInfoCircle} size="4x" className="mb-2" />
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
							<div className="d-flex flex-row justify-content-center">
								<FontAwesomeIcon icon={faArrowUp} size="3x" className="mr-1" />
								<FontAwesomeIcon className="ml-2 mb-1" icon={faMoneyBillAlt} size="3x" />
							</div>
							<p>Deposit money</p>
						</button>
						<button type="button">
							<div className="d-flex flex-row justify-content-center">
								<FontAwesomeIcon icon={faArrowDown} size="3x"className="mr-1" />
								<FontAwesomeIcon className="ml-2 mb-1" icon={faMoneyBillAlt} size="3x" />
							</div>
								<p>Withdrow money</p>
						</button>
					</div>
					<div className="nav-item__empty">
						<p>Account Balance</p>
					</div>
				</div>
				<div className="nav-item">
					<div className="nav-item__main d-flex align-items-center">
						<input 
							label="Set pause when test started" 
							value="testing" 
							checked={this.state.testingPreferences}  
							type="checkbox"
							id="testingCheckbox" 	
							onChange={this.switchTestingPreferences} 
						/>
						<label htmlFor="testingCheckbox">Set pause when test started</label>
					</div>
					<div className="nav-item__empty">
						<p>Testing Preferences</p>
					</div>
				</div> 
			</div>
		)
	}
}

export default TabProject



