import React from "react";
import PropTypes from "prop-types";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import { chartSettings } from '../../../utils/constants'
import { ChartCanvas, Chart } from "react-stockcharts";
import { StraightLine } from "react-stockcharts/lib/series"
import {
	CandlestickSeries,
	LineSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
	CrossHairCursor,
	EdgeIndicator,
	CurrentCoordinate,
	MouseCoordinateY,
	MouseCoordinateX
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
	OHLCTooltip,
	BollingerBandTooltip,
	GroupTooltip,
} from "react-stockcharts/lib/tooltip";
import { ema, stochasticOscillator, bollingerBand } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { TrendLine, FibonacciRetracement, GannFan, EquidistantChannel, StandardDeviationChannel, DrawingObjectSelector } from "react-stockcharts/lib/interactive";
import { last, toObject } from "react-stockcharts/lib/utils";

import {
	saveInteractiveNodes,
	getInteractiveNodes
} from "./interactiveutils";

class CandleStickChartWithStandardDeviationChannel extends React.Component {
	constructor(props) {
		super(props);
		this.saveInteractiveNodes = saveInteractiveNodes.bind(this);
		this.getInteractiveNodes = getInteractiveNodes.bind(this);
		this.state = {
			lines: [
				{ xPos: 1900, type: "vertical", color: "white", strokeType: 'Dash' }, //verticcal or horizontal lines
				{ xPos: 1800, type: "vertical", color: "white", strokeType: 'Dash' }
			],
			enableTrendLine: false,
			trends_1: [],
			enableFib: false,
			retracements_1: [],
			enableFans: false,
			fans: [],
			enableEquidistantChannel: false,
			channels_1: [],
			enableSTD: false,
			std_channels_1: [],
		};
	}
	dashClick = () => this.setState({ dash: true });
	buttonClick = () => this.setState({ enableTrendLine: true });
	fibClick = () => this.setState({ enableFib: true });
	fanClick = () => this.setState({ enableFans: true });
	equidistantChannelClick = () => this.setState({ enableEquidistantChannel: true });
	stdClick = () => this.setState({ enableSTD: true });
	saveInteractiveNode = (node) => this.node = node
	saveCanvasNode = (node) => this.canvasNode = node
	componentDidMount = () => document.addEventListener("keyup", this.onKeyPress)
	componentWillUnmount = () => document.removeEventListener("keyup", this.onKeyPress)

	handleSelection = (interactives) => {
		if (interactives[0].type === "Trendline") {
			const state = toObject([interactives[0]], each => {
				return [
					`trends_${each.chartId}`,
					each.objects
				];
			});
			this.setState(state);
		}
		if (interactives[1].type === "FibonacciRetracement") {
			const state = toObject([interactives[1]], each => {
				return [
					`retracements_${each.chartId}`,
					each.objects
				];
			});
			this.setState(state);
		}
		if (interactives[2].type === "GannFan") {
			const state = toObject([interactives[2]], each => {
				return [
					"fans",
					each.objects,
				];
			});
			this.setState(state);
		}
		if (interactives[3].type === "EquidistantChannel") {
			const state = toObject([interactives[3]], each => {
				return [
					`channels_${each.chartId}`,
					each.objects,
				];
			});
			this.setState(state);
		}
		if (interactives[4].type === "StandardDeviationChannel") {
			const state = toObject([interactives[4]], each => {
				return [
					`std_channels_${each.chartId}`,
					each.objects,
				];
			});
			this.setState(state);
		}
	}

	onDash = () => {
		this.setState({
			...this.state,
			lines: this.state.lines,
			enableTrendLine: false
		});
	}
	onTrendsComplete = (trends_1) => this.setState({
		trends_1,
		enableTrendLine: false
	});


	onFibComplete = (retracements_1) => this.setState({
		retracements_1,
		enableFib: false
	});

	onFanComplete = (fans) => this.setState({
		enableFans: false,
		fans
	});

	onEquidistantChannelComplete = (channels_1) => this.setState({
		enableEquidistantChannel: false,
		channels_1
	});
	onSTDComplete = (std_channels_1) => this.setState({
		enableSTD: false,
		std_channels_1
	});
	onKeyPress = (e) => {
		const keyCode = e.which;
		switch (keyCode) {
			case 90: {
				// Z
				const trends_1 = this.state.trends_1
					.filter(each => !each.selected);
				const retracements_1 = this.state.retracements_1
					.filter(each => !each.selected);
				const fans = this.state.fans
					.filter(each => !each.selected);
				const channels_1 = this.state.channels_1
					.filter(each => !each.selected);
				const std_channels_1 = this.state.std_channels_1
					.filter(each => !each.selected);
				// this.canvasNode.cancelDrag();
				this.setState({
					trends_1,
					retracements_1,
					fans,
					channels_1,
					std_channels_1
				});
				break;
			}
			case 88: {
				// X
				// this.canvasNode.cancelDrag();
				this.setState({
					...this.state,
					enableSTD: false,
					enableTrendLine: false,
					enableFib: false,
					enableFans: false,
					enableEquidistantChannel: false
				});
				break;
			}
		}
	}
	render() {
		const chartHeight = document.getElementsByClassName('chartContainer')[0].clientHeight
		const { type, data: initialData, width, ratio } = this.props;
		const margin = { left: 15, right: 50, top: 20, bottom: 20 };
		const gridWidth = width - margin.left - margin.right;
		const showGrid = true;
		const yGrid = showGrid ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 } : {};
		const ema20 = ema()
			.id(0)
			.options({ windowSize: 20 })
			.merge((d, c) => { d.ema20 = c; })
			.accessor(d => d.ema20);
		const ema50 = ema()
			.id(2)
			.options({ windowSize: 50 })
			.merge((d, c) => { d.ema50 = c; })
			.accessor(d => d.ema50);
		const slowSTO = stochasticOscillator()
			.options({ windowSize: 14, kWindowSize: 3 })
			.merge((d, c) => { d.slowSTO = c; })
			.accessor(d => d.slowSTO);
		const fastSTO = stochasticOscillator()
			.options({ windowSize: 14, kWindowSize: 1 })
			.merge((d, c) => { d.fastSTO = c; })
			.accessor(d => d.fastSTO);
		const fullSTO = stochasticOscillator()
			.options({ windowSize: 14, kWindowSize: 3, dWindowSize: 4 })
			.merge((d, c) => { d.fullSTO = c; })
			.accessor(d => d.fullSTO);

		const bb = bollingerBand()
			.merge((d, c) => { d.bb = c; })
			.accessor(d => d.bb);

		const calculatedData = bb(ema20(ema50(slowSTO(fastSTO(fullSTO(initialData))))));
		const xScaleProvider = discontinuousTimeScaleProvider
			.inputDateAccessor(d => d.date);
		const {
			data,
			xScale,
			xAccessor,
			displayXAccessor,
		} = xScaleProvider(calculatedData);


		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - 150)]);
		const xExtents = [start, end];

		let activeChartSettings = this.props.chartMode ? chartSettings.light : chartSettings.dark;
		///////
		return (
			<>
				<ChartCanvas

					ref={this.saveCanvasNode}
					height={chartHeight - 50}
					width={width}
					ratio={ratio}
					margin={margin}
					type={type}
					seriesName="MSFT"
					data={data}
					xScale={xScale}
					xAccessor={xAccessor}
					displayXAccessor={displayXAccessor}
					xExtents={xExtents}
				>
					<Chart

						id={1}
						height={chartHeight - 100}
						yExtents={[d => [d.high, d.low],
						bb.accessor(),
						ema20.accessor(),
						ema50.accessor()]}
						padding={{ top: 10, bottom: 20 }}
					>
						<YAxis
							axisAt="right"
							orient="right"
							ticks={5} {...yGrid}
							inverted={true}
							tickStroke={activeChartSettings.linesColor}
							stroke={activeChartSettings.textColor} />
						<XAxis
							axisAt="bottom"
							orient="bottom"
							showTicks={true}
							outerTickSize={0}
							stroke={activeChartSettings.textColor}
							tickStroke={activeChartSettings.linesColor} />
						<MouseCoordinateY
							at="right"
							orient="right"
							displayFormat={format(".2f")} />
						<MouseCoordinateX
							at="bottom"
							orient="bottom"
							displayFormat={timeFormat("%Y-%m-%d")}
						/>
						<LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()} />
						<LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()} />
						<CurrentCoordinate yAccessor={ema20.accessor()} fill={ema20.stroke()} />
						<CurrentCoordinate yAccessor={ema50.accessor()} fill={ema50.stroke()} />
						<CandlestickSeries />
						<EdgeIndicator itemType="last" orient="right" edgeAt="right"
							yAccessor={d => d.close} fill={d => d.close > d.open ? "#6BA583" : "#DB0000"} />

						<OHLCTooltip origin={[0, -10]} />
						<GroupTooltip
							layout="vertical"
							origin={[0, 15]}
							verticalSize={20}
							options={[
								{
									yAccessor: ema20.accessor(),
									yLabel: `${ema20.type()}(${ema20.options().windowSize})`,
									valueFill: ema20.stroke(),
									withShape: true,
								},
								{
									yAccessor: ema50.accessor(),
									yLabel: `${ema50.type()}(${ema50.options().windowSize})`,
									valueFill: ema50.stroke(),
									withShape: true,
								},
							]}
						/>
						<BollingerBandTooltip
							origin={[0, 60]}
							valueStroke='red'
							yAccessor={d => d.bb}
							options={bb.options()}
						/>

						<TrendLine
							ref={this.saveInteractiveNodes("Trendline", 1)}
							enabled={this.state.enableTrendLine}
							type="LINE"
							snap={false}
							snapTo={d => [d.high, d.low]}
							onStart={() => { }}
							trends={this.state.trends_1}
							onComplete={this.onTrendsComplete}
							appearance={{
								stroke: activeChartSettings.linesColor,
								strokeOpacity: .8,
								strokeWidth: 1,
								edgeStrokeWidth: 1,
								edgeFill: activeChartSettings.linesColor,
								edgeStroke: activeChartSettings.linesColor
							}}
						/>

						<FibonacciRetracement
							ref={this.saveInteractiveNodes("FibonacciRetracement", 1)}
							enabled={this.state.enableFib}
							retracements={this.state.retracements_1}
							onComplete={this.onFibComplete}
							appearance={{
								fontFamily: "Roboto",
								fontSize: 14,
								strokeOpacity: .6,
								strokeWidth: 1,
								r: 3,
								edgeStrokeWidth: 1,
								stroke: activeChartSettings.linesColor,
								fontFill: activeChartSettings.linesColor,
								nsEdgeFill: activeChartSettings.linesColor,
								edgeFill: activeChartSettings.linesColor,
								edgeStroke: activeChartSettings.linesColor
							}}
						/>

						<GannFan
							ref={this.saveInteractiveNodes("GannFan", 1)}
							enabled={this.state.enableFans}
							onStart={() => { }}
							onComplete={this.onFanComplete}
							fans={this.state.fans}
							appearance={{
								fontFamily: "Roboto",
								fontSize: 14,
								strokeOpacity: .4,
								fillOpacity: .3,
								r: 3,
								strokeWidth: .5,
								edgeStrokeWidth: 1,
								stroke: activeChartSettings.linesColor,
								fill: [
									`rgba(47, 189, 47, .2)`,
									`rgba(47, 189, 47, .2)`,
									`rgba(47, 189, 47, .2)`,
									`rgba(47, 189, 47, .2)`,
									`rgba(47, 189, 47, .2)`,
									`rgba(47, 189, 47, .2)`,
									`rgba(47, 189, 47, .2)`,
									`rgba(47, 189, 47, .2)`
								],
								fontFill: activeChartSettings.linesColor,
								edgeFill: activeChartSettings.linesColor,
								edgeStroke: activeChartSettings.linesColor
							}}
						/>
						<EquidistantChannel
							ref={this.saveInteractiveNodes("EquidistantChannel", 1)}
							enabled={this.state.enableEquidistantChannel}
							onStart={() => { }}
							onComplete={this.onEquidistantChannelComplete}
							channels={this.state.channels_1}
							appearance={{
								fillOpacity: 1,
								strokeOpacity: .4,
								strokeWidth: 1,
								edgeStrokeWidth: 1,
								r: 3,
								edgeFill2: activeChartSettings.linesColor,
								stroke: activeChartSettings.linesColor,
								fill: `rgba(47, 189, 47, .2)`,
								edgeFill: activeChartSettings.linesColor,
								edgeStroke: activeChartSettings.linesColor
							}}
						/>
						<StandardDeviationChannel
							ref={this.saveInteractiveNodes("StandardDeviationChannel", 1)}
							enabled={this.state.enableSTD}
							onStart={() => { }}
							onComplete={this.onSTDComplete}
							channels={this.state.std_channels_1}
							appearance={{
								fillOpacity: 1,
								strokeOpacity: .4,
								strokeWidth: 1,
								edgeStrokeWidth: 1,
								r: 3,
								edgeFill2: activeChartSettings.linesColor,
								stroke: activeChartSettings.linesColor,
								fill: `rgba(47, 189, 47, .2)`,
								edgeFill: activeChartSettings.linesColor,
								edgeStroke: activeChartSettings.linesColor
							}}
						/>
						{this.state.lines.map(function (item, i) {
							return <StraightLine
								key={i}
								type={item.type}
								xValue={item.xPos}
								strokeDasharray={item.strokeType}
							/>

						})}
					</Chart>
					<CrossHairCursor />
					<DrawingObjectSelector
						enabled={!(
							this.state.enableSTD
							&& this.state.enableFib
							&& this.state.enableTrendLine
							&& this.state.enableFans
							&& this.state.enableEquidistantChannel)}
						getInteractiveNodes={this.getInteractiveNodes}
						drawingObjectMap={{
							FibonacciRetracement: "retracements",
							Trendline: "trends",
							GannFan: "fans",
							EquidistantChannel: "channels",
							StandardDeviationChannel: "channels"
						}}
						onSelect={this.handleSelection}
					/>
					<CrossHairCursor stroke={chartSettings.mode ? chartSettings.light.textColor : chartSettings.dark.textColor} />
				</ChartCanvas>

				< button onClick={this.onDash} >
					dash
				</button >
				< button onClick={this.buttonClick}  >
					TrendLine
				</button >

				<button onClick={this.fibClick} >
					Fib Retracement
				</button>

				<button onClick={this.fanClick} >
					Gann Fan
				</button>

				<button onClick={this.equidistantChannelClick} >
					Equidistant Channel
				</button>

				<button onClick={this.stdClick}>
					Standard Deviation Channel
				</button>
			</>
		);
	}
}

CandleStickChartWithStandardDeviationChannel.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithStandardDeviationChannel.defaultProps = {
	type: "svg"
};

CandleStickChartWithStandardDeviationChannel = fitWidth(
	CandleStickChartWithStandardDeviationChannel
);

export default CandleStickChartWithStandardDeviationChannel;
