import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './index.css';

export const Menu = props => {
	const {
		currentUser: { profile_picture, user_name }
	} = props;
	const [hamburger, setHamburger] = useState(window.innerWidth > 1023 ? false : true);
	if (hamburger) {
		return (
			<div className='hamburger-menu first-layer-padding'>
				<FontAwesomeIcon
					icon={faBars}
					className='bars'
					onClick={() => {
						setHamburger(!hamburger);
					}}
				/>
			</div>
		);
	}
	return (
		<div className='left-container first-layer-padding'>
			<div className={`left-container-heading`}>
				BUVUD
				<FontAwesomeIcon
					icon={faBars}
					className='bars'
					onClick={() => {
						setHamburger(!hamburger);
					}}
				/>
			</div>
			<div className='left-container-user-profile-wrapper'>
				<img src={profile_picture} className='avatar-img' />
				{user_name}
			</div>
		</div>
	);
};
