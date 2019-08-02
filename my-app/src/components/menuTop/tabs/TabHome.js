import React, { Component, Suspense } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCaretDown, faPause, faPlay, faShoppingCart, faCartArrowDown, faExchange, faTimes,
	faArrowDown, faArrowUp, faBackward, faForward, faCrosshairs, faAngleRight
} from '@fortawesome/pro-solid-svg-icons';
import Slider from "react-slick";

let timeFrameOptionsArray = ['1 min', '2 mins', '15 mins', '30 mins', '1 hour', '4 hours', '1 day', '1 week', '1 month']
let testingOptionsArray = ['Every tick', '1 min', '5 mins', '15 mins', '30 mins', '1 hour', '4 hours', '1 day', '1 week', '1 month']

class TabHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			testActions: true,
			timeFrame: {
				selectedOption: 1,
				optionsArr: timeFrameOptionsArray
			},

			testingSpeed: {
				min: 1,
				selectedOption: 1,
				max: testingOptionsArray.length
			}
		};
	}
	//Status action BUTTON (PLAY \ PAUSE)
	testActions = () => this.setState({ testActions: !this.state.testActions });
	//changing testing speed ----------
	testingSpeed = e => this.setState({
		testingSpeed: {
			...this.state.testingSpeed,
			selectedOption: Number(e.target.value),
		}
	})
	//testing back
	testingBack = () => this.state.testingSpeed.selectedOption > 1 ?
		this.setState({
			testingSpeed: {
				...this.state.testingSpeed,
				selectedOption: this.state.testingSpeed.selectedOption - 1
			}
		}) : this.setState()
	//testing forward
	testingForward = () => this.state.testingSpeed.selectedOption < testingOptionsArray.length ?
		this.setState({
			testingSpeed: {
				...this.state.testingSpeed,
				selectedOption: this.state.testingSpeed.selectedOption + 1
			}
		}) : this.setState()
	// set timeframes -----------------
	setTimeframe = e => this.setState({
		timeFrame: {
			...this.state.timeFrame,
			selectedOption: Number(e.target.value)
		}
	})
	//increase timeframe to 1
	timeframeUp = () => this.state.timeFrame.selectedOption < timeFrameOptionsArray.length
		? this.setState({
			timeFrame: {
				...this.state.timeFrame,
				selectedOption: this.state.timeFrame.selectedOption + 1
			}
		})
		: this.setState()
	//decrease timeframe to 1
	timeframeDown = () => this.state.timeFrame.selectedOption > 1
		? this.setState({
			timeFrame: {
				...this.state.timeFrame,
				selectedOption: this.state.timeFrame.selectedOption - 1
			}
		})
		: this.setState()

	render() {

		let settings = {
			dots: false,
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			initialSlide: 3,
			draggable: false,
			variableWidth: true,
			speed: 300,
			responsive: [
				{
					breakpoint: 1201,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 3
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
					<Slider {...settings} className="scroll">
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
									<button className="dropTarget"><p>Actions w/ orders</p> <FontAwesomeIcon icon={faCaretDown} /> </button>
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
								<select className="mb-1" value={this.state.timeFrame.selectedOption} onChange={this.setTimeframe}>
									{this.state.timeFrame.optionsArr.map(function (item, index) {
										index++
										return <option key={index} value={index}>{item}</option>
									})}
								</select>
								<div>
									<button type="button" onClick={this.timeframeUp} >
										<FontAwesomeIcon icon={faArrowUp} size="3x" />
									</button>
									<button type="button" onClick={this.timeframeDown}>
										<FontAwesomeIcon icon={faArrowDown} size="3x" />
									</button>
								</div>
							</div>

							<div className="nav-item__bottom">
								<div className="dropDown">
									<button className="dropTarget">
										<p>Timeframe</p>
										<FontAwesomeIcon icon={faCaretDown} />
									</button>
									<ul>
										<li><button>Manage timeframes</button></li>
									</ul>
								</div>
							</div>
						</div>

						<div className="nav-item">
							<div className="d-flex nav-item__main flex-column">
								<div>
									<button type="button" onClick={this.testingBack}>
										<FontAwesomeIcon icon={faBackward} size="2x" className="mb-2" />
										<p>Step back <br /> 1 bar</p>
									</button>
									<button type="button" onClick={this.testingForward} >
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
										step={1}
										value={this.state.testingSpeed.selectedOption}
										min={this.state.testingSpeed.min}
										max={this.state.testingSpeed.max}
									/>
									<p>Testing speed</p>
								</div>
							</div>

							<div className="nav-item__bottom">
								<div className="dropDown">
									<button className="dropTarget"><p>Testing</p> <FontAwesomeIcon icon={faCaretDown} /> </button>
									<ul>
										<li><button>Step by 1 tick</button></li>
										<hr />
										<li className="subList" >
											<button className="ff"><p>Step size</p> <FontAwesomeIcon icon={faAngleRight} /></button>
											<ul onClick={this.testingSpeed}>
												{testingOptionsArray.map(function (item, index) {
													index++
													return <li key={index}><button value={index}>{item}</button></li>
												})}
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
					</Slider>
				</div>
			</Suspense>
		)
	}
}

export default TabHome



