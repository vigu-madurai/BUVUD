import React, { useState } from 'react';

import { TeamMembers } from '../TeamMembers/index';
import { MainChart } from '../MainChart/index';

import './index.css';

export const Card = props => {
	const { type, data, className } = props;
	const [minimize, setMinimize] = useState(false);

	return (
		<div className={`card-container`}>
			<div className='card-heading-wrapper inner-padding'>
				{type}
				<div className='icons-wrapper'>
					<span className='minimize-icon' onClick={() => setMinimize(!minimize)}>
						{' '}
						-{' '}
					</span>
					<span className='close-icon'> x </span>
				</div>
			</div>
			{data && !minimize ? (
				<div className={`card-body-wrapper inner-padding ${className}`}>
					{type === 'Project Activity' ? <MainChart data={data} /> : null}
					{type === 'Team Members' ? <TeamMembers data={data} /> : null}
					{/* {type === 'Manager Activity' ? <MainChart data={data} /> : null} */}
				</div>
			) : null}
		</div>
	);
};
