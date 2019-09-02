import React, { Component, Suspense, lazy } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faWrench, faCamera, faSearchPlus, faSearchMinus, faSearch, faSave,
	faEdit, faTable, faSyncAlt, faDownload, faAlignCenter, faAlignJustify,
	faAlignLeft, faAlignRight, faAdjust, faAnchor, faMagnet, faPlusSquare
} from '@fortawesome/pro-solid-svg-icons';

import {
	Modal, ModalHeader, ModalBody, DropdownToggle, DropdownMenu, DropdownItem,
	UncontrolledButtonDropdown, Dropdown
} from 'reactstrap';

const Slider = lazy(() => import('react-slick'));

class TabCharts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}
	//changing chart theme mode
	changeChartMode = (e) => this.props.changeChartMode(e.target.checked);

	toggleModal = () => this.setState({ modal: !this.state.modal });

	render() {
		let settings = {
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
		const { chartMode } = this.props;

		return (
			<Suspense fallback={<div>loading...</div>}>
				<div className="clear-overflow">
					<Slider {...settings} className="scroll" >
						<div className="nav-item" >
							<div
								className="nav-item__main d-flex flex-column align-items-start">
								<UncontrolledButtonDropdown>
									<DropdownToggle caret size="sm" color="">
										<FontAwesomeIcon
											icon={faPlusSquare}
											size={'2x'}
											className="mr-2" />
										<p>Add New Chart</p>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem >Close All Positions and Orders</DropdownItem>
										<DropdownItem >Open group of orders</DropdownItem>
										<DropdownItem >Duplicate Position</DropdownItem>
										<DropdownItem divider />
										<DropdownItem >Move Stop Loss to Breackeven</DropdownItem>
									</DropdownMenu>
								</UncontrolledButtonDropdown>
								<UncontrolledButtonDropdown>
									<DropdownToggle caret size="sm" color="">
										<FontAwesomeIcon
											icon={faPlusSquare}
											size={'2x'}
											className="mr-2" />
										<p>Add Range Bar Chart</p>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem >Close All Positions and Orders</DropdownItem>
										<DropdownItem >Open group of orders</DropdownItem>
										<DropdownItem >Duplicate Position</DropdownItem>
										<DropdownItem divider />
										<DropdownItem >Move Stop Loss to Breackeven</DropdownItem>
									</DropdownMenu>
								</UncontrolledButtonDropdown>
							</div>
							<div className="nav-item__empty">
								<p>New Charts</p>
							</div>
						</div>
						<div className="nav-item" >
							<div
								className="nav-item__main d-flex flex-column align-items-start">
								<UncontrolledButtonDropdown>
									<DropdownToggle caret size="sm" color="">
										<FontAwesomeIcon
											icon={faPlusSquare}
											size={'2x'}
											className="mr-2" />
										<p>Add Renko Bar Chart</p>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem >Close All Positions and Orders</DropdownItem>
										<DropdownItem >Open group of orders</DropdownItem>
										<DropdownItem >Duplicate Position</DropdownItem>
										<DropdownItem divider />
										<DropdownItem >Move Stop Loss to Breackeven</DropdownItem>
									</DropdownMenu>
								</UncontrolledButtonDropdown>
								<UncontrolledButtonDropdown>
									<DropdownToggle caret size="sm" color="">
										<FontAwesomeIcon
											icon={faPlusSquare}
											size={'2x'}
											className="mr-2" />
										<p>Add Profit Chart</p>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem >Close All Positions and Orders</DropdownItem>
										<DropdownItem >Open group of orders</DropdownItem>
										<DropdownItem >Duplicate Position</DropdownItem>
										<DropdownItem divider />
										<DropdownItem >Move Stop Loss to Breackeven</DropdownItem>
									</DropdownMenu>
								</UncontrolledButtonDropdown>
							</div>
							<div className="nav-item__empty">
								<p>New Charts</p>
							</div>
						</div>
						<div className="nav-item">
							<div
								className="nav-item__main d-flex flex-column align-items-start">
								<div className="pretty p-default p-round">
									<input
										type="radio"
										id="candleMode"
										name="createProgect"
										value="candleMode"
									/>
									<div className="state">
										<label>Candle Mode</label>
									</div>
								</div>

								<div className="pretty p-default p-round">
									<input
										type="radio"
										id="barsMode"
										name="createProgect"
										value="barsMode"
									/>
									<div className="state">
										<label>Bars Mode</label>
									</div>
								</div>

								<div className="pretty p-default p-round">
									<input
										type="radio"
										id="linesMode"
										name="createProgect"
										value="linesMode"
									/>
									<div className="state">
										<label>	Lines Mode</label>
									</div>
								</div>
							</div>
							<div className="nav-item__empty">
								<p>Create Project</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-row">
								<button type="button">
									<FontAwesomeIcon
										icon={faSearchPlus}
										size="3x"
										className="mb-2"
									/>
									<p>Zoom in</p>
								</button>
								<button type="button">
									<FontAwesomeIcon
										icon={faSearchMinus}
										size="3x"
										className="mb-2"
									/>
									<p>Zoom Out</p>
								</button>
								<button type="button">
									<FontAwesomeIcon
										icon={faSearch}
										size="3x"
										className="mb-2"
									/>
									<p>Search <br /> Date/Time</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Zoom & Search</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column">
								<button
									type="button"
									className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faSave} size="2x" className="mr-2" />
									<p>Save template</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center">
									<FontAwesomeIcon icon={faEdit} size="2x" className="mr-2" />
									<p>Edit template</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center">
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
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon
										icon={faDownload}
										size="2x"
										className="mr-2"
									/>
									<p>Load Project</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon icon={faSave} size="2x" className="mr-2" />
									<p>Save Project</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
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
								<button
									type="button"
									className="d-flex flex-row align-items-center">
									<FontAwesomeIcon
										icon={faAlignCenter}
										size="2x"
										className="mr-2"
									/>
									<p>Tile Vertically</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center">
									<FontAwesomeIcon
										icon={faAlignJustify}
										size="2x"
										className="mr-2"
									/>
									<p>Tile Horizontally</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Window Settings</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column">
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon
										icon={faAlignLeft}
										size="2x"
										className="mr-2"
									/>
									<p>Minimize All</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon
										icon={faAlignRight}
										size="2x" className="mr-2"
									/>
									<p>Cascade</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Window Settings</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column">
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon icon={faAdjust} size="1x" className="mr-2" />
									<p>Autoscroll</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon icon={faAnchor} size="1x" className="mr-2" />
									<p>Chart Offset</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon icon={faMagnet} size="1x" className="mr-2" />
									<p>Magnet mode</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon
										icon={faSyncAlt}
										size="1x"
										className="mr-2"
									/>
									<p>Sync charts</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Charts</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column">
								<button
									onClick={this.toggleModal}
									className="nav-item__toolsList modal-container flex-column justify-content-center"
								>
									<FontAwesomeIcon icon={faWrench} size="3x" className="mb-2" />
									<p>Chart setting</p>
								</button>
								<Modal
									isOpen={this.state.modal}
									toggle={this.toggleModal}
									className={this.props.className}
								>
									<ModalHeader toggle={this.toggleModal}>
										Chart settings
									</ModalHeader>
									<ModalBody>
										<div className="d-flex">
											<p className="mr-2">Chart theme:</p>
											<div className="pretty p-switch p-fill">
												<input
													type="checkbox"
													defaultChecked={chartMode}
													onChange={this.changeChartMode}
												/>
												<div className="state">
													<label>{chartMode ? 'light' : 'dark'}</label>
												</div>
											</div>
										</div>
									</ModalBody>
								</Modal>
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



