import React from "react";
import PropTypes from "prop-types";
import { format } from "d3-format";
import { chartSettings } from '../../../utils/constants'
import { ChartCanvas, Chart } from "react-stockcharts";
import {
	BarSeries,
	BollingerSeries,
	CandlestickSeries,
	LineSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
	CrossHairCursor,
	EdgeIndicator,
	CurrentCoordinate,
	MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
	OHLCTooltip,
	BollingerBandTooltip,
	GroupTooltip,
} from "react-stockcharts/lib/tooltip";
import { ema, stochasticOscillator, bollingerBand } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

const bbAppearance = {
	stroke: {
		top: "#964B00",
		middle: "#FF6600",
		bottom: "#964B00",
	},
	fill: "#4682B4"
};

class CandleStickChartWithDarkTheme extends React.Component {
	render() {
		const chartHeight = document.getElementsByClassName('chartContainer')[0].clientHeight
		const { type, data: initialData, width, ratio } = this.props;

		const margin = { left: 50, right: 50, top: 20, bottom: 70 };

		// const gridHeight = chartHeight - margin.top - margin.bottom;
		const gridWidth = width - margin.left - margin.right;

		const showGrid = true;
		const yGrid = showGrid ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 } : {};
		// const xGrid = showGrid ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2 } : {};

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

		return (
			<ChartCanvas height={chartHeight}
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
					height={chartHeight - 50}
					yExtents={[d => [d.high, d.low], bb.accessor(), ema20.accessor(), ema50.accessor()]}
					padding={{ top: 10, bottom: 20 }}
				>
					<YAxis axisAt="right" orient="right" ticks={5} {...yGrid} inverted={true}
						tickStroke={activeChartSettings.linesColor}
						stroke={activeChartSettings.textColor} />
					<XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0}
						stroke={activeChartSettings.textColor}
						tickStroke={activeChartSettings.linesColor} />
					opacity={0.5} />
						<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")} />
					<CandlestickSeries
						stroke={d => d.close > d.open ? "#6BA583" : "#DB0000"}
						wickStroke={d => d.close > d.open ? "#6BA583" : "#DB0000"}
						fill={d => d.close > d.open ? "#6BA583" : "#DB0000"} />

					<LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()} />
					<LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()} />

					<BollingerSeries yAccessor={d => d.bb}
						{...bbAppearance} />
					<CurrentCoordinate yAccessor={ema20.accessor()} fill={ema20.stroke()} />
					<CurrentCoordinate yAccessor={ema50.accessor()} fill={ema50.stroke()} />

					<EdgeIndicator itemType="last" orient="right" edgeAt="right"
						yAccessor={d => d.close} fill={d => d.close > d.open ? "#6BA583" : "#DB0000"} />

					<OHLCTooltip origin={[20, -10]} />

					<GroupTooltip
						layout="vertical"
						origin={[20, 15]}
						verticalSize={20}
						onClick={e => console.log(e)}
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
						origin={[20, 60]}
						valueStroke='red'
						yAccessor={d => d.bb}
						options={bb.options()}
					/>
				</Chart>
				<Chart id={2}
					yExtents={d => d.volume}
					height={chartHeight - 50}
				// origin={(w, h) => [0, h - 475]}
				>
					<YAxis
						axisAt="left"
						orient="left"
						ticks={5}
						tickFormat={format(".2s")}
						stroke={activeChartSettings.textColor}
						tickStroke={activeChartSettings.linesColor} />
					<XAxis
						axisAt="bottom"
						tickStroke={activeChartSettings.linesColor}
						stroke={activeChartSettings.textColor}
						orient="bottom"
					/>
					<BarSeries
						yAccessor={d => d.volume}
						fill={d => d.close > d.open ? "#6BA583" : "#DB0000"} />
				</Chart>

				<CrossHairCursor stroke={chartSettings.mode ? chartSettings.light.textColor : chartSettings.dark.textColor} />
			</ChartCanvas>
		);
	}
}
CandleStickChartWithDarkTheme.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

CandleStickChartWithDarkTheme.defaultProps = {
	type: "svg",
};
CandleStickChartWithDarkTheme = fitWidth(CandleStickChartWithDarkTheme);

export default CandleStickChartWithDarkTheme;
