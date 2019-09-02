import React, { Component, Suspense, lazy } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faList, faPlusSquare, faSyncAlt, faCubes, faChartLine
} from '@fortawesome/pro-solid-svg-icons';
import {
	DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown
} from 'reactstrap';

const Slider = lazy(() => import('react-slick'));

class TabIndicators extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		let settings = {
			dots: false,
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			variableWidth: true,
			draggable: false,
			speed: 300,
			responsive: [
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
						infinite: true,
						slidesToShow: 1
					}
				}
			]
		};
		return (
			<Suspense fallback={<div>loading...</div>}>
				<div className="clear-overflow">
					<Slider {...settings} className="scroll">
						<div className="nav-item">
							<div className="d-flex h-100">
								<div
									className="nav-item__main d-flex flex-row align-items-center"
								>
									<button
										className="d-flex flex-column align-items-center justify-content-center"
									>
										<FontAwesomeIcon icon={faList} size="2x" className="mb-2" />
										<p>Curent Chart <br /> Indicators</p>
									</button>
								</div>
								<div
									className="nav-item__main d-flex flex-row align-items-center">
									<UncontrolledButtonDropdown className="vertical">
										<DropdownToggle caret size="sm" color="">
											<FontAwesomeIcon
												icon={faChartLine} size="2x"
												className="mb-1" />
											All
  								</DropdownToggle>
										<DropdownMenu>
											<DropdownItem>
												Close All Positions and Orders
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
								</div>
							</div>
							<div className="nav-item__empty">
								<p>Add Indicator</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="d-flex h-100">
								<div
									className="nav-item__main d-flex flex-row align-items-center"
								>
									<UncontrolledButtonDropdown className="vertical">
										<DropdownToggle caret size="sm" color="">
											<FontAwesomeIcon
												icon={faChartLine} size="2x"
												className="mb-1" />
											Adaptive
  								</DropdownToggle>
										<DropdownMenu>
											<DropdownItem >stuff</DropdownItem>
											<DropdownItem >stuff 2</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
								</div>
								<div
									className="nav-item__main d-flex flex-row align-items-center"
								>
									<UncontrolledButtonDropdown className="vertical">
										<DropdownToggle caret size="sm" color="">
											<FontAwesomeIcon
												icon={faChartLine} size="2x"
												className="mb-1" />
											Trend
  								</DropdownToggle>
										<DropdownMenu>
											<DropdownItem >stuff</DropdownItem>
											<DropdownItem >stuff 2</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
								</div>
							</div>
							<div className="nav-item__empty">
								<p>Add Indicator</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="d-flex h-100">
								<div
									className="nav-item__main d-flex flex-row align-items-center"
								>
									<UncontrolledButtonDropdown className="vertical">
										<DropdownToggle caret size="sm" color="">
											<FontAwesomeIcon
												icon={faChartLine} size="2x"
												className="mb-1" />
											Volume
  								</DropdownToggle>
										<DropdownMenu>
											<DropdownItem >stuff</DropdownItem>
											<DropdownItem >stuff 2</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
								</div>
								<div
									className="nav-item__main d-flex flex-row align-items-center"
								>
									<UncontrolledButtonDropdown className="vertical">
										<DropdownToggle caret size="sm" color="">
											<FontAwesomeIcon
												icon={faChartLine} size="2x"
												className="mb-1" />
											Volatility
  								</DropdownToggle>
										<DropdownMenu>
											<DropdownItem >stuff</DropdownItem>
											<DropdownItem >stuff 2</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
								</div>
							</div>
							<div className="nav-item__empty">
								<p>Add Indicator</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="d-flex h-100">
								<div
									className="nav-item__main d-flex flex-row align-items-center"
								>
									<UncontrolledButtonDropdown className="vertical">
										<DropdownToggle caret size="sm" color="">
											<FontAwesomeIcon
												icon={faChartLine} size="2x"
												className="mb-1" />
											Custom
  								</DropdownToggle>
										<DropdownMenu>
											<DropdownItem >stuff</DropdownItem>
											<DropdownItem >stuff 2</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
								</div>
								<div
									className="nav-item__main d-flex flex-column align-items-center"
								>
									<button
										type="button"
										className="d-flex flex-column align-items-center justify-content-center"
									>
										<FontAwesomeIcon
											icon={faPlusSquare}
											size="3x" className="mb-2"
										/>
										<p>Install New <br /> Indicator</p>
									</button>
								</div>
							</div>
							<div className="nav-item__empty">
								<p>Add Indicator</p>
							</div>
						</div>
						<div className="nav-item">
							<div
								className="nav-item__main d-flex flex-row align-items-center"
							>
								<button
									type="button"
									className="d-flex flex-column align-items-center justify-content-center"
								>
									<FontAwesomeIcon
										icon={faSyncAlt}
										size="3x"
										className="mb-2"
									/>
									<p>MT4 Indicator <br /> Converter</p>
								</button>
								<button
									type="button"
									className="d-flex flex-column align-items-center justify-content-center"
								>
									<FontAwesomeIcon icon={faCubes} size="3x" className="mb-2" />
									<p>Virtual Indicator <br /> Builder</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Indicators' tools</p>
							</div>
						</div>
					</Slider>
				</div>
			</Suspense>
		)
	}
}

export default TabIndicators