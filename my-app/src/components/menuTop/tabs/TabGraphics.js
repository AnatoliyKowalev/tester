import React, { Component, Suspense, lazy } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheckSquare, faStickyNote, faVectorSquare, faCircle, faCaretLeft, faFont,
	faChartLine, faList, faTrash
} from '@fortawesome/pro-solid-svg-icons';
import {
	DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown
} from 'reactstrap';

const Slider = lazy(() => import('react-slick'));

class TabGraphics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			verticalLine: false,
			trendLine: false,
			horizontalLine: false,
			polyline: false,
			ray: false,
			selectAllObjects: false,
			deselectObjects: false
		};
	}
	switchLineState = e => {
		let value = e.target.value
		this.setState({
			[value]: !this.state[value]
		});
	}

	render() {
		let settings = {
			dots: false,
			infinite: false,
			slidesToShow: 7,
			slidesToScroll: 1,
			draggable: false,
			variableWidth: true,
			speed: 300,
			responsive: [
				{
					breakpoint: 1201,
					settings: {
						slidesToShow: 5
					}
				},
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
					<Slider {...settings} className="scroll">
						<div className="nav-item">
							<div
								className="nav-item__main d-flex flex-column align-items-start">
								<button>
									<FontAwesomeIcon
										icon={faStickyNote}
										size="4x"
										className="mb-1" />
									<p>Note</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Add a Note</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="d-flex h-100">
								<div
									className="nav-item__main d-flex flex-column align-items-start"
								>
									<div className="pretty p-default p-curve">
										<input
											onChange={this.switchLineState}
											type="checkbox"
											id="verticalLine"
											value="verticalLine"
											checked={this.state.verticalLine}
										/>
										<div className="state">
											<label>Vertical Line</label>
										</div>
									</div>
									<div className="pretty p-default p-curve">
										<input
											onChange={this.switchLineState}
											type="checkbox"
											id="horizontalLine"
											value="horizontalLine"
											checked={this.state.horizontalLine}
										/>
										<div className="state">
											<label>Horizontal Line</label>
										</div>
									</div>
									<div className="pretty p-default p-curve">
										<input
											onChange={this.switchLineState}
											type="checkbox"
											id="trendLine"
											value="trendLine"
											checked={this.state.trendLine}
										/>
										<div className="state">
											<label>Trend Line</label>
										</div>
									</div>
								</div>
							</div>
							<div className="nav-item__empty">
								<p>Add Line</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="d-flex h-100">
								<div
									className="nav-item__main d-flex flex-column align-items-start"
								>
									<div className="pretty p-default p-curve">
										<input
											onChange={this.switchLineState}
											type="checkbox" id="polyline"
											value="polyline"
											id="polyline"
											checked={this.state.polyline}
										/>
										<div className="state">
											<label>Polyline</label>
										</div>
									</div>
									<div className="pretty p-default p-curve">
										<input
											onChange={this.switchLineState}
											type="checkbox"
											id="ray"
											value="ray"
											checked={this.state.ray}
										/>
										<div className="state">
											<label>Ray</label>
										</div>
									</div>
								</div>
							</div>
							<div className="nav-item__empty">
								<p>Add Line</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-row">
								<button type="button" >
									<FontAwesomeIcon
										icon={faVectorSquare}
										size="2x"
										className="mb-1"
									/>
									<p>Rectangle</p>
								</button>
								<button type="button" >
									<FontAwesomeIcon icon={faCircle} size="2x" className="mb-1" />
									<p>Ellipse</p>
								</button>
								<button type="button" >
									<FontAwesomeIcon
										icon={faCaretLeft}
										size="2x"
										className="mb-1"
									/>
									<p>Triangle</p>
								</button>
							</div>
							<div className="nav-item__empty"  >
								<p>Zoom & Search</p>
							</div>
						</div>
						<div className="nav-item">
							<div
								className="nav-item__main d-flex flex-column align-items-center"
							>
								<UncontrolledButtonDropdown className="vertical">
									<DropdownToggle caret size="sm" color="">
										<FontAwesomeIcon
											icon={faCheckSquare} size="2x"
											className="mb-1" />
										Add Icon
  								</DropdownToggle>
									<DropdownMenu>
										<DropdownItem >some 1</DropdownItem>
										<DropdownItem >some 2</DropdownItem>
									</DropdownMenu>
								</UncontrolledButtonDropdown>
							</div>
							<div className="nav-item__empty">
								<p>Add Icon</p>
							</div>
						</div>
						<div className="nav-item">
							<div
								className="nav-item__main d-flex flex-row align-items-center"
							>
								<UncontrolledButtonDropdown className="vertical">
									<DropdownToggle caret size="sm" color="">
										<FontAwesomeIcon
											icon={faCheckSquare} size="2x"
											className="mb-1" />
										Add channel
  								</DropdownToggle>
									<DropdownMenu>
										<DropdownItem >some 1</DropdownItem>
										<DropdownItem >some 2</DropdownItem>
									</DropdownMenu>
								</UncontrolledButtonDropdown>
								<UncontrolledButtonDropdown className="vertical">
									<DropdownToggle caret size="sm" color="">
										<FontAwesomeIcon
											icon={faCheckSquare} size="2x"
											className="mb-1" />
										Add Fibonacci Tool
  								</DropdownToggle>
									<DropdownMenu>
										<DropdownItem >some 1</DropdownItem>
										<DropdownItem >some 2</DropdownItem>
									</DropdownMenu>
								</UncontrolledButtonDropdown>
								<UncontrolledButtonDropdown className="vertical">
									<DropdownToggle caret size="sm" color="">
										<FontAwesomeIcon
											icon={faCheckSquare} size="2x"
											className="mb-1" />
										Add Andrew's Pitchfork
  								</DropdownToggle>
									<DropdownMenu>
										<DropdownItem >some 1</DropdownItem>
										<DropdownItem >some 2</DropdownItem>
									</DropdownMenu>
								</UncontrolledButtonDropdown>
							</div>
							<div className="nav-item__empty">
								<p>Graphical Indicators</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column ">
								<button
									type="button"
									className="d-flex flex-column align-items-center justify-content-center"
								>
									<FontAwesomeIcon icon={faFont} size="3x" className="mb-2" />
									<p>Text labels</p>
								</button>
							</div>
							<div className="nav-item__empty"  >
								<p>Add Text</p>
							</div>
						</div>
						<div className="nav-item">
							<div
								className="nav-item__main d-flex flex-column align-items-center"
							>
								<button
									type="button"
									className="d-flex flex-column align-items-center justify-content-center"
								>
									<FontAwesomeIcon
										icon={faChartLine}
										size="3x"
										className="mb-2"
									/>
									<p>Wave <br /> Symbols</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Add Wave  Symbols</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="nav-item__main d-flex flex-column">
								<button
									type="button"
									className="d-flex flex-column align-items-center justify-content-center"
								>
									<FontAwesomeIcon icon={faList} size="3x" className="mb-2" />
									<p>List of objects</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Objects</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="d-flex h-100">
								<div
									className="nav-item__main d-flex flex-column align-items-start"
								>
									<div className="pretty p-default p-curve">
										<input
											onChange={this.switchLineState}
											type="checkbox" id="selectAllObjects"
											id="selectAllObjects"
											value="selectAllObjects"
											checked={this.state.selectAllObjects}
										/>
										<div className="state">
											<label>Select All Objects</label>
										</div>
									</div>
									<div className="pretty p-default p-curve">
										<input
											onChange={this.switchLineState}
											type="checkbox"
											id="deselectObjects"
											value="deselectObjects"
											checked={this.state.deselectObjects}
										/>
										<div className="state">
											<label>Deselect Objects</label>
										</div>
									</div>
								</div>
							</div>
							<div className="nav-item__empty">
								<p>Objects Selections</p>
							</div>
						</div>
						<div className="nav-item">
							<div
								className="nav-item__main d-flex flex-column align-items-start"
							>
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon icon={faTrash} size="2x" className="mr-2" />
									<p>Delete Most Recent Objects</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon icon={faTrash} size="2x" className="mr-2" />
									<p>Delete Selected</p>
								</button>
								<button
									type="button"
									className="d-flex flex-row align-items-center"
								>
									<FontAwesomeIcon icon={faTrash} size="2x" className="mr-2" />
									<p>Delete All</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Objects Deletion</p>
							</div>
						</div>
					</Slider>
				</div>
			</Suspense>
		)
	}
}

export default TabGraphics



