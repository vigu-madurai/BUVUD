import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './index.css';

export const Menu = props => {
	const {
		currentUser: { profile_picture, user_name }
	} = props;
	return (
		<>
			<div className='left-container-heading'>
				BUVUD
				<FontAwesomeIcon icon={faBars} className='bars' />
			</div>
			<div className='left-container-user-profile-wrapper'>
				<img src={profile_picture} className='avatar-img' />
				{user_name}
			</div>
		</>
	);
};
