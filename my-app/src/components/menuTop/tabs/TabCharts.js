import React, { Component, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCaretDown, faWrench, faCamera, faSearchPlus, faSearchMinus, faSearch, faSave, faEdit, faTable, faSyncAlt, faDownload,
	faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faAdjust, faAnchor, faMagnet, faPlusSquare
} from '@fortawesome/pro-solid-svg-icons';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import Slider from "react-slick";

class TabCharts extends Component {

	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}

	changeChartMode = (e) => this.props.changeChartMode(e.target.checked)

	toggle = () => this.setState({ modal: !this.state.modal });

	render() {
		var settings = {
			dots: false,
			infinite: false,
			slidesToShow: 7,
			slidesToScroll: 1,
			variableWidth: true,
			draggable: false,
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
						infinite: true,
						slidesToShow: 1
					}
				}
			]
		};
		const { chartMode } = this.props

		return (
			<Suspense fallback={<div>loading...</div>}>
				<div className="clear-overflow">
					<Slider {...settings} className="scroll" >
						<div className="nav-item" >
							<div className="nav-item__main d-flex flex-column align-items-start">
								<div className="dropDown">
									<button className="dropTarget">
										<div className="d-flex flex-row align-items-center">
											<FontAwesomeIcon icon={faPlusSquare} size={'2x'} className="mr-2" />
											<p>Add New Chart</p>
										</div>
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
								<div className="dropDown">
									<button className="dropTarget">
										<div className="d-flex flex-row align-items-center">
											<FontAwesomeIcon icon={faPlusSquare} size={'2x'} className="mr-2" />
											<p>Add New Chart</p>
										</div>
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
							<div className="nav-item__empty">
								<p>New Charts</p>
							</div>
						</div>
						<div className="nav-item" >
							<div className="nav-item__main d-flex flex-column align-items-start">
								<div className="dropDown">
									<button className="dropTarget">
										<div className="d-flex flex-row align-items-center">
											<FontAwesomeIcon icon={faPlusSquare} size={'2x'} className="mr-2" />
											<p>Add New Chart</p>
										</div>
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
								<div className="dropDown">
									<button className="dropTarget">
										<div className="d-flex flex-row align-items-center">
											<FontAwesomeIcon icon={faPlusSquare} size={'2x'} className="mr-2" />
											<p>Add New Chart</p>
										</div>
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
							<div className="nav-item__empty">
								<p>New Charts</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column align-items-start" >
								<label>
									<input type="radio" id="candleMode" name="createProgect" value="candleMode" />
									Candle Mode
						</label>
								<label >
									<input type="radio" id="barsMode" name="createProgect" value="barsMode" />
									Bars Mode
						</label>
								<label>
									<input type="radio" id="linesMode" name="createProgect" value="linesMode" />
									Lines Mode
						</label>
							</div>
							<div className="nav-item__empty">
								<p>Create Project</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-row">
								<button type="button">
									<FontAwesomeIcon icon={faSearchPlus} size="3x" className="mb-2" />
									<p>Zoom in</p>
								</button>
								<button type="button">
									<FontAwesomeIcon icon={faSearchMinus} size="3x" className="mb-2" />
									<p>Zoom Out</p>
								</button>
								<button type="button">
									<FontAwesomeIcon icon={faSearch} size="3x" className="mb-2" />
									<p>Search <br /> Date/Time</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Zoom & Search</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column">
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faSave} size="2x" className="mr-2" />
									<p>Save template</p>
								</button>
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faEdit} size="2x" className="mr-2" />
									<p>Edit template</p>
								</button>
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faTable} size="2x" className="mr-2" />
									<p>Default template</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Profiles</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column" >
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faDownload} size="2x" className="mr-2" />
									<p>Load Project</p>
								</button>
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faSave} size="2x" className="mr-2" />
									<p>Save Project</p>
								</button>
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faSyncAlt} size="2x" className="mr-2" />
									<p>Restore Default Profile</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Profiles</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column">
								<button type="button" >
									<FontAwesomeIcon icon={faCamera} size="4x" className="mb-1" />
									<p>Take a screenshot</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Screenshot</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column">
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faAlignCenter} size="1x" className="mr-2" />
									<p>Tile Vertically</p>
								</button>
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faAlignJustify} size="1x" className="mr-2" />
									<p>Tile Horizontally</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Window Settings</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column">
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faAlignLeft} size="1x" className="mr-2" />
									<p>Minimize All</p>
								</button>
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faAlignRight} size="1x" className="mr-2" />
									<p>Cascade</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Window Settings</p>
							</div>
						</div>


						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column">
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faAdjust} size="1x" className="mr-2" />
									<p>Autoscroll</p>
								</button>
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faAnchor} size="1x" className="mr-2" />
									<p>Chart Offset</p>
								</button>
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faMagnet} size="1x" className="mr-2" />
									<p>Magnet mode</p>
								</button>
								<button type="button" className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faSyncAlt} size="1x" className="mr-2" />
									<p>Sync charts</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Charts</p>
							</div>
						</div>
						<div className="nav-item">

							<div className="nav-item__main d-flex flex-column">
								<button onClick={this.toggle} className="nav-item__toolsList modal-container flex-column justify-content-center">
									<FontAwesomeIcon icon={faWrench} size="3x" className="mb-2" />
									<p>Chart setting</p>
									
								</button>

								<MDBContainer>
									<MDBModal isOpen={this.state.modal} toggle={this.toggle}>
										<MDBModalHeader toggle={this.toggle}>Chart settings</MDBModalHeader>
										<MDBModalBody>
											<label className="switch" style={{ width: '110px' }}>
												<p>{chartMode ? 'light' : 'dark'}</p>
												<input type="checkbox" defaultChecked={chartMode} onChange={this.changeChartMode} />
												<span className="slider round"></span>
											</label>
										</MDBModalBody>
									</MDBModal>
								</MDBContainer>
							</div>
							<div className="nav-item__empty">
								<p>Settings</p>
							</div>
						</div>
					</Slider>



				</div>
			</Suspense>
		)
	}
}

export default TabCharts



