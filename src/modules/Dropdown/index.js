import React from 'react';
import './index.css';

// Reusable Dropdown
export const Dropdown = props => {
	// selectValue => current selected value
	// filterData => choices in the dropdown
	// setFilteredData => function to change the selectValue
	const { selectValue, filterData, setFilteredData } = props;

	const handleChange = e => {
		setFilteredData(e.target.value);
	};

	return (
		<div className='ddown'>
			<select value={selectValue} onChange={handleChange}>
				{filterData.map(data => {
					return (
						<option key={data} value={data}>
							{data}
						</option>
					);
				})}
			</select>
		</div>
	);
};
