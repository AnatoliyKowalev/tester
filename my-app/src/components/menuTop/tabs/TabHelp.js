import React, { Component } from 'react';

class TabHelp extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	       
	    };
	}

    render () {
	
	return (
	   	<div className="scroll">
	   	 	<div className="nav-item">
				<div className="nav-item__main d-flex flex-row align-items-start">
					<button type="button" >
						<i className="fa fa-book fa-4x"></i>
		   	 			<p>Quick Start <br/> Guide</p>
					</button>
					<button type="button">
						<i className="fa fa-video fa-4x"></i>
		   	 			<p>Tutorials (Video)</p>
					</button>
					<button type="button">
						<i className="fa fa-file-alt fa-4x"></i>
		   	 			<p>F.A.Q.</p>
					</button>
					<button type="button">
						<i className="fa fa-file-pdf fa-4x"></i>
		   	 			<p>User Guide <br/> PDF</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>"How to use" Materials</p>
	   	 		</div>
	   	    </div>

 			<div className="nav-item">
				<div className="nav-item__main d-flex flex-row align-items-start">
					<button type="button">
						<i className="fa fa-envelope fa-4x"></i>
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
				<div className="nav-item__main" >
					<button type="button" >
						<i className="fa fa-dollar-sign fa-4x"></i>
		   	 			<p>Partenrship <br/> Programs</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Contacts</p>
	   	 		</div>
	   	    </div>

	   	    <div className="nav-item">
				<div className="nav-item__main d-flex flex-row align-items-start">
					<button type="button">
						<i className="fa fa-medkit fa-4x"></i>
		   	 			<p>Forex Tester Help</p>
					</button>
					<button type="button">
						<i className="fa fa-ambulance fa-4x"></i>
		   	 			<p>API Help</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Help</p>
	   	 		</div>
	   	    </div>

	   	    <div className="nav-item">
				<div className="nav-item__main">
					<button type="button">
						<i className="fa fa-question-circle fa-4x"></i>
		   	 			<p>About Program</p>
					</button>
				</div>

				<div className="nav-item__empty">
		   	 		<p>Info</p>
	   	 		</div>
	   	    </div>
	   	</div>
	)}
}

export default TabHelp



