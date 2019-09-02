import React, { Component, Suspense, lazy } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faList, faCartPlus, faKeyboard, faMusic, faSyncAlt, faLanguage
} from '@fortawesome/pro-solid-svg-icons';
import {
	DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown
} from 'reactstrap';

const Slider = lazy(() => import('react-slick'));

class TabTools extends Component {
	constructor(props) {
		super(props);
		this.state = {
			panels: {
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
			}
		};
	}

	switchPanelState = (e) => {
		let value = e.target.value
		this.setState({
			panels: {
				...this.state.panels,
				[value]: !this.state.panels[value]
			}
		});
	}

	render() {
		let settings = {
			dots: false,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			draggable: false,
			speed: 300,
			responsive: [
				{
					breakpoint: 481,
					settings: {
						initialSlide: 1,
						centerMode: true,
						slidesToShow: 1,
						infinite: true
					}
				}
			]
		};
		return (
			< Suspense fallback={< div > loading...</div >}>
				<div className="clear-overflow">
					<Slider {...settings} className="scroll" >
						<div className="nav-item">
							<div className="d-flex nav-item__main">
								<button>
									<FontAwesomeIcon icon={faList} size="3x" className="mb-2" />
									<p>Show  Panels</p>
								</button>
							</div>
							<div
								className="nav-item__bottom columnDropTarget d-flex flex-row justify-content-center"
							>
								<UncontrolledButtonDropdown>
									<DropdownToggle caret size="sm" color="">
										Panels
  								</DropdownToggle>
									<DropdownMenu onClick={this.switchPanelState}>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="symbols"
												value="symbols"
												defaultChecked={this.state.panels.symbols}
											/>
											<div className="state">
												<label>Symbols</label>
											</div>
										</div>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="tickCharts"
												value="tickCharts"
												defaultChecked={this.state.panels.tickCharts}
											/>
											<div className="state">
												<label>Tick charts</label>
											</div>
										</div>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="statistics"
												value="statistics"
												defaultChecked={this.state.panels.statistics}
											/>
											<div className="state">
												<label>Statistics</label>
											</div>
										</div>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="scripts"
												value="scripts"
												defaultChecked={this.state.panels.scripts}
											/>
											<div className="state">
												<label>Scripts</label>
											</div>
										</div>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="dataWindow"
												value="dataWindow"
												defaultChecked={this.state.panels.dataWindow}
											/>
											<div className="state">
												<label>Data window</label>
											</div>
										</div>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="openPositions"
												value="openPositions"
												defaultChecked={this.state.panels.openPositions}
											/>
											<div className="state">
												<label>Open positions</label>
											</div>
										</div>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="pendingOrders"
												value="pendingOrders"
												defaultChecked={this.state.panels.pendingOrders}
											/>
											<div className="state">
												<label>Pending orders</label>
											</div>
										</div>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="accountHistory"
												value="accountHistory"
												defaultChecked={this.state.panels.accountHistory}
											/>
											<div className="state">
												<label>	Account history</label>
											</div>
										</div>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="journal"
												value="journal"
												defaultChecked={this.state.panels.journal}
											/>
											<div className="state">
												<label>Journal</label>
											</div>
										</div>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="news"
												value="news"
												defaultChecked={this.state.panels.news}
											/>
											<div className="state">
												<label>News</label>
											</div>
										</div>
										<div className="pretty p-default p-curve">
											<input
												type="checkbox"
												id="notes"
												value="notes"
												defaultChecked={this.state.panels.notes}
											/>
											<div className="state">
												<label>Notes</label>
											</div>
										</div>
									</DropdownMenu>
								</UncontrolledButtonDropdown>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-row">
								<button type="button" >
									<FontAwesomeIcon
										icon={faCartPlus}
										size="2x"
										className="mb-2"
									/>
									<p>Default <br /> orders</p>
								</button>
								<button type="button" >
									<FontAwesomeIcon
										icon={faKeyboard}
										size="2x"
										className="mb-2"
									/>
									<p>Hot keys</p>
								</button>
								<button type="button" >
									<FontAwesomeIcon icon={faMusic} size="2x" className="mb-2" />
									<p>Sounds</p>
								</button>
								<button type="button" >
									<FontAwesomeIcon icon={faSyncAlt} size="2x" className="mb-2" />
									<p>Check <br /> for updates</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Options</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-row">
								<button type="button" >
									<FontAwesomeIcon
										icon={faLanguage}
										size="3x"
										className="mb-1"
									/>
									<p>Language</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Change language</p>
							</div>
						</div>
					</Slider>
				</div>
			</Suspense >
		)
	}
}

export default TabTools



