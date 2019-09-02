import React, { Component, Suspense, lazy } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDollarSign, faRegistered, faCoins, faUpload, faClone, faCopy, faBook
} from '@fortawesome/pro-solid-svg-icons';
import {
	DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown
} from 'reactstrap';

const Slider = lazy(() => import('react-slick'));

class TabStore extends Component {
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
									<FontAwesomeIcon
										icon={faDollarSign}
										size="3x"
										className="mb-2"
									/>
									<p>Upgrate <br /> to FT4</p>
								</button>
								<button type="button" >
									<FontAwesomeIcon
										icon={faRegistered}
										size="3x"
										className="mb-2"
									/>
									<p>Register <br /> Program</p>
								</button>
							</div>
							<div className="nav-item__empty">
								<p>Get the licence</p>
							</div>
						</div>
						<div className="nav-item">
							<div className="d-flex h-100" >
								<div
									className="nav-item__main d-flex flex-row align-items-center"
								>
									<UncontrolledButtonDropdown className="vertical">
										<DropdownToggle caret size="sm" color="">
											Indicators
  								</DropdownToggle>
										<DropdownMenu>
											<DropdownItem >some 1</DropdownItem>
											<DropdownItem >some 2</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
									<UncontrolledButtonDropdown className="vertical">
										<DropdownToggle caret size="sm" color="">
											Strategies
  								</DropdownToggle>
										<DropdownMenu>
											<DropdownItem >some 1</DropdownItem>
											<DropdownItem >some 2</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
									<UncontrolledButtonDropdown className="vertical">
										<DropdownToggle caret size="sm" color="">
											Utilities
  								</DropdownToggle>
										<DropdownMenu>
											<DropdownItem >some 1</DropdownItem>
											<DropdownItem >some 2</DropdownItem>
										</DropdownMenu>
									</UncontrolledButtonDropdown>
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