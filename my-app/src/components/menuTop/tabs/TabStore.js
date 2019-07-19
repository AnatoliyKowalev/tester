import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSortDown, faChartBar, faDollarSign, faRegistered, faCoins, faUpload, faClone, faCopy, faBook
} from '@fortawesome/pro-solid-svg-icons';

class TabStore extends Component {

	render() {
		return (
			<div className="scroll">
				<div className="nav-item">
					<div className="nav-item__main d-flex flex-row">
						<button type="button" >
							<FontAwesomeIcon icon={faDollarSign} size="3x" className="mb-2" />
							<p>Upgrate <br /> to FT4</p>
						</button>
						<button type="button" >
							<FontAwesomeIcon icon={faRegistered} size="3x" className="mb-2" />
							<p>Register <br /> Program</p>
						</button>
					</div>
					<div className="nav-item__empty">
						<p>Get the licence</p>
					</div>
				</div>
				<div className="nav-item">
					<div className="d-flex h-100" >
						<div className="nav-item__main  d-flex flex-column">
							<div className="dropDown vertical">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faChartBar} size="2x" className="mb-2" />
									<p>Indicators</p>
									<FontAwesomeIcon icon={faSortDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
								</ul>
							</div>
						</div>
						<div className="nav-item__main d-flex flex-column">
							<div className="dropDown vertical">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faChartBar} size="2x" className="mb-2" />
									<p>Strategies</p>
									<FontAwesomeIcon icon={faSortDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
								</ul>
							</div>
						</div>
						<div className="nav-item__main d-flex flex-column">
							<div className="dropDown vertical">
								<button className="dropTarget">
									<FontAwesomeIcon icon={faChartBar} size="2x" className="mb-2" />
									<p>Utilities</p>
									<FontAwesomeIcon icon={faSortDown} />
								</button>
								<ul>
									<li><button>Close All Positions and Orders</button></li>
									<li><button>Open group of orders</button></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="nav-item__empty">
						<p>Add Icon</p>
					</div>
				</div>
				<div className="nav-item">
					<div className="nav-item__main d-flex flex-row">
						<button type="button">
							<FontAwesomeIcon icon={faCoins} size="2x" className="mb-2" />
							<p>Vip subscription</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faCoins} size="2x" className="mb-2" />
							<p>Standart <br /> subscription</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faUpload} size="2x" className="mb-2" />
							<p>Activate <br /> Data <br /> Subscription</p>
						</button>
					</div>
					<div className="nav-item__empty">
						<p>Historical Data</p>
					</div>
				</div>
				<div className="nav-item">
					<div className="nav-item__main d-flex flex-row">
						<button type="button">
							<FontAwesomeIcon icon={faClone} size="2x" className="mb-2" />
							<p>Forex Trade <br /> Copier 2</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faCopy} size="2x" className="mb-2" />
							<p>Forex Copier <br /> Remote 2</p>
						</button>
					</div>
					<div className="nav-item__empty">
						<p>Trade Copying Software</p>
					</div>
				</div>
				<div className="nav-item">
					<div className="nav-item__main d-flex flex-row">
						<button type="button">
							<FontAwesomeIcon icon={faClone} size="2x" className="mb-2" />
							<p>Visual <br /> Strategy <br /> Builder</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faClone} size="2x" className="mb-2" />
							<p>Visual Indicator <br /> Builder</p>
						</button>
					</div>
					<div className="nav-item__empty">
						<p>Visual Builders</p>
					</div>
				</div>
				<div className="nav-item">
					<div className="nav-item__main d-flex flex-row align-items-center">
						<button type="button">
							<FontAwesomeIcon icon={faBook} size="2x" className="mb-2" />
							<p>Educational <br /> Course</p>
						</button>
						<button type="button">
							<FontAwesomeIcon icon={faBook} size="2x" className="mb-2" />
							<p>Game</p>
						</button>
					</div>
					<div className="nav-item__empty">
						<p>Education</p>
					</div>
				</div>
			</div>
		)
	}
}

export default TabStore