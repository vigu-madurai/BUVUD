import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
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
				<div className='icons-wrapper' onClick={() => setMinimize(!minimize)}>
					{!minimize ? (
						<span className='minimize-icon'> - </span>
					) : (
						<FontAwesomeIcon icon={faArrowsAltV} className='arrow-icon' />
					)}
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
