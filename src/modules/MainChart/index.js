import React from 'react';
import ReactHighcharts from 'react-highcharts';

export const MainChart = props => {
	const seriesData = [];
	const colors = ['#EA4E9D', '#6db3f2', '#c4c4c4', '#d3d3d3'];
	const months = Object.keys(props.data);
	for (let ctr = 0; ctr < months.length; ctr++) {
		let monthData = {
			name: months[ctr],
			data: props.data[months[ctr]].slice(0, 7),
			color: colors[ctr]
		};
		seriesData.push(monthData);
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
			valuePrefix: '$ '
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
			{/* <div className='chart'> */}
			<ReactHighcharts config={config} />
			{/* </div> */}
		</div>
	);
};
