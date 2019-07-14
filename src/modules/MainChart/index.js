import React, { useState } from 'react';
import ReactHighcharts from 'react-highcharts';

import { Dropdown } from '../Dropdown/index';

export const MainChart = props => {
	// data sets to filter data
	const filterData = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
	const [selectValue, setSelectValue] = useState(filterData[0]);
	const setFilteredData = value => {
		setSelectValue(value);
	};

	// method to determine the range (index can be calculated)
	const setRange = () => {
		return filterData.indexOf(selectValue) * 7;
	};

	// chart settings
	const seriesData = [];
	const colors = ['#EA4E9D', '#6db3f2', '#c4c4c4', '#d3d3d3'];
	const months = Object.keys(props.data);
	for (let ctr = 0; ctr < months.length; ctr++) {
		let monthData = {
			name: months[ctr],
			data: props.data[months[ctr]].slice(setRange(), setRange() + 7),
			color: colors[ctr]
		};
		seriesData.push(monthData); // y-axis data
	}
	const config = {
		chart: {
			type: 'areaspline'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			gridLineWidth: 1
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineWidth: 0
		},
		tooltip: {
			shared: true,
			valuePrefix: '$ ',
			backgroundColor: 'white',
			borderColor: 'white',
			borderRadius: 0
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			areaspline: {
				fillOpacity: 0.5
			}
		},
		series: seriesData
	};

	return (
		<div className='inner-padding'>
			<div className='filter-wrapper'>
				Select Range:
				<Dropdown setFilteredData={setFilteredData} selectValue={selectValue} filterData={filterData} />
			</div>
			<div className='selected-filter'>{selectValue}</div>
			<div className='chart-wrapper'>
				<ReactHighcharts config={config} />
			</div>
		</div>
	);
};
