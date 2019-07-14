import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import { TeamMembers } from '../TeamMembers/index';
import { MainChart } from '../MainChart/index';
import { ManagerChart } from '../ManagerChart/index';
import './index.css';

export const Card = props => {
	const { type, data, className } = props;
	const [minimize, setMinimize] = useState(false); // states to handle the toggling miniize/maximize
	// reusable wrapper compoonent
	return (
		<div className={`card-container`}>
			{/* header wrapper functionality */}
			<div className='card-heading-wrapper inner-padding'>
				{type}
				{/* handling of minimize & maximize icon */}
				<div className='icons-wrapper' onClick={() => setMinimize(!minimize)}>
					{!minimize ? (
						<span className='minimize-icon'> - </span>
					) : (
						<FontAwesomeIcon icon={faArrowsAltV} className='arrow-icon' />
					)}
				</div>
			</div>
			{data && !minimize ? (
				// loads the components based upon its type
				<div className={`card-body-wrapper ${className || ''}`}>
					{type === 'Project Activity' ? <MainChart data={data} /> : null}
					{type === 'Team Members' ? <TeamMembers data={data} /> : null}
					{type === 'Manager Activity' ? <ManagerChart data={data} /> : null}
				</div>
			) : null}
		</div>
	);
};
