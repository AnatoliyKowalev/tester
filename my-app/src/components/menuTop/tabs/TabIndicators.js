import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCaretDown, faList, faPlusSquare, faSyncAlt, faCubes } from '@fortawesome/pro-solid-svg-icons';

class TabIndicators extends Component {
	render() {
		return (
			<div className="scroll">

				<div className="nav-item">
					<div className="d-flex h-100">
						<div className="nav-item__main d-flex flex-row align-items-center">
							<button className="d-flex flex-column align-items-center">
								<FontAwesomeIcon icon={faList} size="2x" />
								<p>Curent Chart <br /> Indicators</p>
							</button>
						</div>

						<div className="nav-item__main d-flex flex-row align-items-center">
							<div className="dropDown">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faChartLine} size="2x" />
									All
									<FontAwesomeIcon icon={faCaretDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
									<li><button>Duplicate Position</button></li>
									<hr />
									<li><button>Move Stop Loss to Breackeven</button></li>
								</ul>
							</div>

						</div>

						<div className="nav-item__main d-flex flex-row align-items-center">
							<div className="dropDown">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faChartLine} size="2x" />
									Trend
								<FontAwesomeIcon icon={faCaretDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
								</ul>
							</div>
						</div>

						<div className="nav-item__main d-flex flex-row align-items-center">
							<div className="dropDown">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faChartLine} size="2x" />
									Volume
								<FontAwesomeIcon icon={faCaretDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
								</ul>
							</div>
						</div>

						<div className="nav-item__main d-flex flex-row align-items-center">
							<div className="dropDown">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faChartLine} size="2x" />
									Oscillators
								<FontAwesomeIcon icon={faCaretDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
								</ul>
							</div>
						</div>

						<div className="nav-item__main d-flex flex-row align-items-center">
							<div className="dropDown">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faChartLine} size="2x" />
									Adaptive
								<FontAwesomeIcon icon={faCaretDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
								</ul>
							</div>
						</div>

						<div className="nav-item__main d-flex flex-row align-items-center">
							<div className="dropDown">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faChartLine} size="2x" />
									Volatility
								<FontAwesomeIcon icon={faCaretDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
								</ul>
							</div>
						</div>

						<div className="nav-item__main d-flex flex-row align-items-center">
							<div className="dropDown">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faChartLine} size="2x" />
									Custom
								<FontAwesomeIcon icon={faCaretDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
								</ul>
							</div>
						</div>

						<div className="nav-item__main d-flex flex-column align-items-center">
							<button type="button" className="d-flex flex-column align-items-center">
								<FontAwesomeIcon icon={faPlusSquare} size="3x" />
								<p>Install New <br /> Indicator</p>
							</button>
						</div>

					</div>

					<div className="nav-item__empty"  >
						<p>Add Indicator</p>
					</div>
				</div>

				<div className="nav-item">
					<div className="nav-item__main d-flex flex-row align-items-center">
						<button type="button" className="d-flex flex-column align-items-center">
							<FontAwesomeIcon icon={faSyncAlt} size="3x" />
							<p>MT4 Indicator <br /> Converter</p>
						</button>
						<button type="button" className="d-flex flex-column align-items-center">
							<FontAwesomeIcon icon={faCubes} size="3x" />
							<p>Virtual Indicator <br /> Builder</p>
						</button>
					</div>

					<div className="nav-item__empty">
						<p>Indicators' tools</p>
					</div>
				</div>
			</div>
		)
	}
}

export default TabIndicators