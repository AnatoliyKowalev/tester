import React, { Component } from 'react';
import { Checkbox } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faPlusSquare, faFolderOpen, faTimesCircle, faSave, faDownload, faInfoCircle, faArrowUp, faArrowDown,
					faMoneyBillAlt } from '@fortawesome/pro-solid-svg-icons';


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
							<FontAwesomeIcon icon={faPlusSquare} size="4x" />
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
							<FontAwesomeIcon icon={faFolderOpen} size="3x" />
							<p>Open Project</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faTimesCircle} size="3x" />
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
							<FontAwesomeIcon icon={faSave} size="3x" />
							<p>Save Project</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faSave} size="3x" />
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
							<FontAwesomeIcon icon={faSync} size="3x"/>
							<p>Restart Project</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faDownload} size="3x"/>
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
							<FontAwesomeIcon icon={faInfoCircle} size="4x"/>
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
								<FontAwesomeIcon icon={faArrowUp} size="3x"/>
								<FontAwesomeIcon icon={faMoneyBillAlt} size="3x"/>
							</span>
								<p>Deposit money</p>
						</button>
						<button type="button">
							<div className="d-flex">
								<FontAwesomeIcon icon={faArrowDown} size="3x"/>
								<FontAwesomeIcon icon={faMoneyBillAlt} size="3x"/>
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
		)
	}
}

export default TabProject



