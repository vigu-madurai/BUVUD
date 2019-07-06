import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './index.css';

export const Menu = () => {
	return (
		<>
			<div className='left-container-heading'>
				BUVUD
				<FontAwesomeIcon icon={faBars} className='bars' />
			</div>
			<div className='left-container-user-profile-wrapper'>
				<FontAwesomeIcon icon={faUserCircle} className='avatar-img' />
				Jack Williams
			</div>
		</>
	);
};
