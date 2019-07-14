import React, { useState } from 'react';
import ReactHighcharts from 'react-highcharts';

import { Dropdown } from '../Dropdown/index';

export const ManagerChart = props => {
	let xData = [],
		y1Data = [],
		y2Data = [];

	// data to filter month
	const filterMonth = Object.keys(props.data);
	const [selectMonth, setSelectMonth] = useState(filterMonth[0]);
	const setFilteredMonth = value => {
		setSelectMonth(value);
		applyFilters();
	};

	// data to filter calls
	const filterCalls = Object.keys(props.data[selectMonth]);
	const [selectCalls, setSelectCalls] = useState(filterCalls[0]);
	const setFilteredCalls = value => {
		setSelectCalls(value);
		applyFilters();
	};

	// apply the selected filter values and render the chart based upon it
	const applyFilters = () => {
		let monthData = props.data[selectMonth];
		let callData = monthData[selectCalls];
		for (let ctr = 0; ctr < callData.length; ctr++) {
			xData.push(ctr + 1);
			y1Data.push(100 - callData[ctr]);
			y2Data.push(callData[ctr]);
		}
	};

	// chart settings
	const config = {
		chart: {
			type: 'column'
		},
		credits: { enabled: false },
		legend: { enabled: false },
		title: '',
		plotOptions: {
			series: {
				stacking: 'normal'
			}
		},
		xAxis: { categories: xData },
		yAxis: {
			max: 100,
			maxPadding: 0,
			allowDecimals: false,
			labels: {
				fontSize: 0
			},
			title: {
				text: ''
			}
		},
		series: [
			{
				name: 'Left Over Calls',
				legendIndex: 1,
				color: '#ddd',
				data: y1Data
			},
			{
				name: selectCalls,
				LegendIndex: 0,
				data: y2Data,
				color: 'dodgerblue'
			}
		]
	};
	return (
		<div className='inner-padding'>
			<div className='filter-wrapper'>
				<div>
					Select Month:
					<Dropdown setFilteredData={setFilteredMonth} selectValue={selectMonth} filterData={filterMonth} />
				</div>
				<div>
					Select Call Type:
					<Dropdown setFilteredData={setFilteredCalls} selectValue={selectCalls} filterData={filterCalls} />
				</div>
			</div>
			<div className='selected-filter'>
				{selectMonth}'s {selectCalls}
			</div>
			<div className='chart-wrapper'>
				{Object.keys(props.data).length ? applyFilters() : null}
				<ReactHighcharts config={config} />
			</div>
		</div>
	);
};
