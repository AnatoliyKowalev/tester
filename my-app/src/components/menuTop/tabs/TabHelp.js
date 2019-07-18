import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faVideo, faFileAlt, faFilePdf, faEnvelope, faMedkit, faAmbulance, faQuestionCircle, faDollarSign } from '@fortawesome/pro-solid-svg-icons';

class TabHelp extends Component {

	render () {
		return (
	   	<div className="scroll">

	   	 	<div className="nav-item">
					<div className="nav-item__main d-flex flex-row align-items-center">
						<button type="button" >
							<FontAwesomeIcon icon={faBook} size="4x" />
							<p>Quick Start <br/> Guide</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faVideo} size="4x" />
							<p>Tutorials (Video)</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faFileAlt} size="4x" />
							<p>F.A.Q.</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faFilePdf} size="4x" />
							<p>User Guide <br/> PDF</p>
						</button>
					</div>

					<div className="nav-item__empty">
		   	 		<p>"How to use" Materials</p>
	   	 		</div>
				</div>

 				<div className="nav-item">
					<div className="nav-item__main d-flex flex-row align-items-center">
						<button type="button">
							<FontAwesomeIcon icon={faEnvelope} size="4x" />
							<p>Contact us</p>
						</button>
						<button type="button">
							<i className="fa fa-forumbee fa-4x"></i>
							<p>Forum</p>
						</button>
					</div>

					<div className="nav-item__empty">
		   	 		<p>Contacts</p>
	   	 		</div>
				</div>
	   	    
				<div className="nav-item">
					<div className="nav-item__main d-flex flex-row align-items-center" >
						<button type="button" >
							<FontAwesomeIcon icon={faDollarSign} size="4x" />
								<p>Partenrship <br/> Programs</p>
						</button>
					</div>

					<div className="nav-item__empty">
		   	 		<p>Contacts</p>
	   	 		</div>
				</div>

				<div className="nav-item">
					<div className="nav-item__main d-flex flex-row align-items-center">
						<button type="button">
							<FontAwesomeIcon icon={faMedkit} size="4x" />
							<p>Forex Tester Help</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faAmbulance} size="4x" />
								<p>API Help</p>
						</button>
					</div>

					<div className="nav-item__empty">
		   	 		<p>Help</p>
	   	 		</div>
				</div>

				<div className="nav-item">
					<div className="nav-item__main d-flex flex-row align-items-center">
						<button type="button">
							<FontAwesomeIcon icon={faQuestionCircle} size="4x" />
								<p>About Program</p>
						</button>
					</div>

					<div className="nav-item__empty">
		   	 		<p>Info</p>
	   	 		</div>
				</div>
	   	</div>
		)
	}
}

export default TabHelp



