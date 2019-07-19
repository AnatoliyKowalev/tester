import React, { Component, Suspense } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCaretDown, faPause, faPlay, faShoppingCart, faCartArrowDown, faExchange, faTimes,
	faArrowDown, faArrowUp, faBackward, faForward, faCrosshairs, faAngleRight
}from '@fortawesome/pro-solid-svg-icons';

class TabHome extends Component {

	constructor(props) {
		super(props);
		this.state = {
			testActions: true,
			testingSpeed: {
				min: '0',
				currentSpeed: '0',
				max: '1000'
			}
		};
	}

	//changing of currentSpeed from Testing item
	testingSpeed = (e) => {
		let speed = e.target.value
		this.setState({
			testingSpeed: {
				...this.state.testingSpeed,
				currentSpeed: speed,
			}
		})
	}
	//Status action BUTTON (PLAY \ PAUSE)
	testActions = (e) => {
		this.setState(prevState => ({
			testActions: !prevState.testActions
		}));
	}

	render() {
		return (
			<Suspense fallback={<div>loading...</div>}>
				<div className="scroll">
					<div className="nav-item">
						<div className="d-flex nav-item__main">
							<button type="button" onClick={this.testActions}>
								<FontAwesomeIcon icon={this.state.testActions ? faPlay : faPause} size="4x" className="mb-2" />
								<p>Sart/Pause Test</p>
							</button>
						</div>
						<div className="nav-item__empty">
							<p>Test actions</p>
						</div>
					</div>

					<div className="nav-item">
						<div className="d-flex nav-item__main">
							<button type="button">
								<FontAwesomeIcon icon={faShoppingCart} size="2x" className="mb-2" />
								<p>Market Order</p>
							</button>
							<button type="button" >
								<FontAwesomeIcon icon={faCartArrowDown} size="2x" className="mb-2" />
								<p>Pending Order</p>
							</button>
							<button type="button" >
								<FontAwesomeIcon icon={faExchange} size="2x" className="mb-2" />
								<p>Modify Order</p>
							</button>
							<button type="button" >
								<FontAwesomeIcon icon={faTimes} size="2x" className="mb-2" />
								<p>Market Order</p>
							</button>
						</div>
						<div className="nav-item__bottom">
							<div className="dropDown">
								<button className="dropTarget">Actions w/ orders <FontAwesomeIcon icon={faCaretDown} /> </button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
									<li><button>Duplicate Position</button></li>
									<hr />
									<li><button>Move Stop Loss to Breackeven</button></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="nav-item">
						<div className="nav-item__main d-flex flex-column">
							<select className="mb-2">
								<option value="1">
									1 min
								</option>
								<option value="2">
									2 mins
								</option>
								<option value="3">
									3 mins
								</option>
								<option value="4">
									4 mins
								</option>
							</select>
							<div>
								<button type="button" >
									<FontAwesomeIcon icon={faArrowUp} size="3x" />
								</button>
								<button type="button" >
									<FontAwesomeIcon icon={faArrowDown} size="3x" />
								</button>
							</div>
						</div>

						<div className="nav-item__bottom">
							<div className="dropDown">
								<button className="dropTarget">Timeframe <FontAwesomeIcon icon={faCaretDown} /> </button>
								<ul>
									<li><button>Manage timeframes</button></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="nav-item">
						<div className="d-flex nav-item__main flex-column">
							<div>
								<button type="button">
									<FontAwesomeIcon icon={faBackward} size="2x" className="mb-2" />
									<p>Step back <br /> 1 bar</p>
								</button>
								<button type="button" >
									<FontAwesomeIcon icon={faForward} size="2x" className="mb-2" />
									<p>Step Forward <br /> 1 bar</p>
								</button>
							</div>
							<div className="d-flex flex-column">
								<input
									type="range"
									onChange={this.testingSpeed}
									className="custom-range"
									id="testingSpeed"
									defaultValue={this.state.testingSpeed.currentSpeed}
									min={this.state.testingSpeed.min}
									max={this.state.testingSpeed.max}
								/>
								<p>Testing speed</p>
							</div>
						</div>

						<div className="nav-item__bottom">
							<div className="dropDown">
								<button className="dropTarget">Testing <FontAwesomeIcon icon={faCaretDown} /> </button>
								<ul>
									<li><button>Manage timeframes</button></li>
									<hr />
									<li className="subList" >
										<button>Step size <FontAwesomeIcon icon={faAngleRight} /></button>
										<ul>
											<li><button>Manage timeframes</button></li>
											<li><button>Manage timeframes</button></li>
											<li><button>Manage timeframes</button></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="nav-item">
						<div className="nav-item__main d-flex">
							<button type="button">
								<FontAwesomeIcon icon={faCrosshairs} size="3x" className="mb-2" />
								<p>Crosshair pointer</p>
							</button>
							<button type="button" >
								<FontAwesomeIcon icon={faCrosshairs} size="3x" className="mb-2" />
								<p>Crosshair sync</p>
							</button>
						</div>

						<div className="nav-item__empty" >
							<p>Pointer</p>
						</div>
					</div>

				</div>
			</Suspense>
		)
	}
}

export default TabHome



