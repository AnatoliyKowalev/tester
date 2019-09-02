import React, { Component, Suspense, lazy } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSync, faPlusSquare, faFolderOpen, faTimesCircle, faSave, faDownload, faInfoCircle,
	faArrowUp, faArrowDown, faMoneyBillAlt
} from '@fortawesome/pro-solid-svg-icons';
import { MDBInput } from 'mdbreact';

const Slider = lazy(() => import('react-slick'));

class TabProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			testingPreferences: false
		};
	}

	switchTestingPreferences = e => this.setState({ testingPreferences: !this.state.testingPreferences });

	render() {
		let settings = {
			dots: false,
			infinite: false,
			slidesToShow: 6,
			slidesToScroll: 1,
			variableWidth: true,
			draggable: false,
			speed: 300,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 5
					}
				},
				{
					breakpoint: 481,
					settings: {
						centerMode: true,
						slidesToShow: 1,
						infinite: true
					}
				}
			]
		};
		return (
			<Suspense fallback={<div>loading...</div>}>
				<div className="clear-overflow">
					<Slider {...settings} className="scroll" >
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
									<p>Download & <br /> Update New HIstory</p>
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
										<FontAwesomeIcon icon={faArrowDown} size="3x" className="mr-1" />
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
								<div className="pretty p-default p-curve">
									<input
										value="testing"
										checked={this.state.testingPreferences}
										type="checkbox"
										id="testingCheckbox"
										onChange={this.switchTestingPreferences}
									/>
									<div className="state">
										<label>Default</label>
									</div>
								</div>
							</div>
							<div className="nav-item__empty">
								<p>Testing Preferences</p>
							</div>
						</div>
					</Slider>
				</div>
			</Suspense>
		)
	}
}

export default TabProject



