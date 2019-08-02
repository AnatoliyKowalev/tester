import React, { Component, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCaretDown, faCartPlus, faKeyboard, faMusic, faSyncAlt, faLanguage } from '@fortawesome/pro-solid-svg-icons';
import Slider from "react-slick";

class TabTools extends Component {

	constructor(props) {
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
			[value]: !this.state[value]
		})
	}

	render() {
		var settings = {
			dots: false,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			draggable: false,
			speed: 300,
			responsive: [
				// {
				// 	breakpoint: 1201,
				// 	settings: {
				// 		// centerMode: true,
				// 		// infinite: true,
				// 		slidesToShow: 1
				// 	}
				// },
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
			<Suspense fallback={<div>loading...</div>}>
				<div className="clear-overflow">
					<Slider {...settings} className="scroll" >
						<div className="nav-item">
							<div className="d-flex nav-item__main">
								<button>
									<FontAwesomeIcon icon={faList} size="3x" className="mb-2" />
									<p>Show  Panels</p>
								</button>
							</div>
							<div className="nav-item__bottom columnDropTarget d-flex flex-row justify-content-center">
								<div className="dropDown">
									<button className="dropTarget">
										<p>Panels</p>
										<FontAwesomeIcon icon={faCaretDown} />
									</button>
									<ul>
										<li>
											<label htmlFor="symbols">
												<input
													type="checkbox"
													id="symbols"
													value="symbols"
													checked={this.state.symbols}
													onChange={this.switchState}
												/>
												Symbols
											</label>
										</li>
										<li>
											<label htmlFor="tickCharts">
												<input
													type="checkbox"
													id="tickCharts"
													value="tickCharts"
													checked={this.state.tickCharts}
													onChange={this.switchState}
												/>
												Tick charts
									</label>
										</li>
										<li>
											<label htmlFor="statistics">
												<input
													type="checkbox"
													id="statistics"
													value="statistics"
													checked={this.state.statistics}
													onChange={this.switchState}
												/>
												Statistics
									</label>
										</li>
										<li>
											<label htmlFor="scripts">
												<input
													type="checkbox"
													id="scripts"
													value="scripts"
													checked={this.state.scripts}
													onChange={this.switchState}
												/>
												Scripts
									</label>
										</li>
										<li>
											<label htmlFor="dataWindow">
												<input
													type="checkbox"
													id="dataWindow"
													value="dataWindow"
													checked={this.state.dataWindow}
													onChange={this.switchState}
												/>
												Data window
									</label>
										</li>
										<li>
											<label htmlFor="openPositions">
												<input
													type="checkbox"
													id="openPositions"
													value="openPositions"
													checked={this.state.openPositions}
													onChange={this.switchState}
												/>
												Open positions
									</label>
										</li>
										<li>
											<label htmlFor="pendingOrders">
												<input
													type="checkbox"
													id="pendingOrders"
													value="pendingOrders"
													checked={this.state.pendingOrders}
													onChange={this.switchState}
												/>
												Pending orders
									</label>
										</li>
										<li>
											<label htmlFor="accountHistory">
												<input
													type="checkbox"
													id="accountHistory"
													value="accountHistory"
													checked={this.state.accountHistory}
													onChange={this.switchState}
												/>
												Account history
									</label>
										</li>
										<li>
											<label htmlFor="journal">
												<input
													type="checkbox"
													id="journal"
													value="journal"
													checked={this.state.journal}
													onChange={this.switchState}
												/>
												Journal
									</label>
										</li>
										<li>
											<label htmlFor="news">
												<input
													type="checkbox"
													id="news"
													value="news"
													checked={this.state.news}
													onChange={this.switchState}
												/>
												News
									</label>
										</li>
										<li>
											<label htmlFor="notes">
												<input
													type="checkbox"
													id="notes"
													value="notes"
													checked={this.state.notes}
													onChange={this.switchState}
												/>
												Notes
									</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-row">
								<button type="button" >
									<FontAwesomeIcon icon={faCartPlus} size="2x" className="mb-2" />
									<p>Default <br /> orders</p>
								</button>
								<button type="button" >
									<FontAwesomeIcon icon={faKeyboard} size="2x" className="mb-2" />
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
									<FontAwesomeIcon icon={faLanguage} size="3x" className="mb-1" />
									<p>Language</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Change language</p>
							</div>
						</div>
					</Slider>
				</div>
			</Suspense>

		)
	}
}

export default TabTools



