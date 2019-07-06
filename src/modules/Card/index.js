import React from 'react';

import './index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faWindowMinimize, faWindowClose } from '@fortawesome/free-solid-svg-icons';

export const Card = () => {
	return (
		<div className='card-container'>
			<div className='card-heading-wrapper inner-padding'>
				Projects
				<div className='icons-wrapper'>
					<span className='minimize-icon'> - </span>
					<span className='close-icon'> x </span>
				</div>
			</div>
			<div className='card-body-wrapper inner-padding'>Body</div>
		</div>
	);
};
