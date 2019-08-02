import React, { Component, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChartBar, faDollarSign, faRegistered, faCoins, faUpload, faClone, faCopy, faBook, faCaretDown
} from '@fortawesome/pro-solid-svg-icons';
import Slider from "react-slick";

class TabStore extends Component {
	render() {
		var settings = {
			dots: false,
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			variableWidth: true,
			draggable: false,
			speed: 300,
			responsive: [
				// {
				// 	breakpoint: 1201,
				// 	settings: {
				// 		slidesToShow: 3,
				// 	}
				// },
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 4
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
								<div className="nav-item__main d-flex flex-row align-items-center">
									<div className="dropDown vertical mr-2">
										<button className="dropTarget">
											<FontAwesomeIcon icon={faChartBar} size="2x" className="mb-2" />
											<p>Indicators</p>
											<FontAwesomeIcon icon={faCaretDown} />
										</button>
										<ul>
											<li><button>Close All Positions and Orders</button></li>
											<li><button>Open group of orders</button></li>
										</ul>
									</div>
									<div className="dropDown vertical mr-2">
										<button className="dropTarget">
											<FontAwesomeIcon icon={faChartBar} size="2x" className="mb-2" />
											<p>Strategies</p>
											<FontAwesomeIcon icon={faCaretDown} />
										</button>
										<ul>
											<li><button>Close All Positions and Orders</button></li>
											<li><button>Open group of orders</button></li>
										</ul>
									</div>
									<div className="dropDown vertical">
										<button className="dropTarget">
											<FontAwesomeIcon icon={faChartBar} size="2x" className="mb-2" />
											<p>Utilities</p>
											<FontAwesomeIcon icon={faCaretDown} />
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
							</div>
							<div className="nav-item__empty">
								<p>Historical Data</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-row">
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
					</Slider>
				</div>
			</Suspense>
		)
	}
}

export default TabStore