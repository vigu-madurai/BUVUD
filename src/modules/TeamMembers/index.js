import React from 'react';
import './index.css';

export const TeamMembers = props => {
	// Team Members Widget
	return props.data.map(el => {
		return (
			<div className='team-member-wrapper' key={el.user_name}>
				<div className='tm-left'>
					<img src={el.profile_picture} className='avatar-img' />
				</div>
				<div className='tm-right'>
					<div>{el.user_name}</div>
					<div>{el.designation}</div>
				</div>
			</div>
		);
	});
};
