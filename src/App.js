import React, { PureComponent } from 'react';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Card } from './modules/Card/index';
import { Menu } from './modules/Menu/index';
import loader from './assets/loader.gif';

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			loading: true, // api status
			profiles: null, // profile values
			projectActivities: null, // main chart values
			managerActivity: null, // manager activity values
			isRightContainerVisible: false // handle hamburger
		};
	}
	componentDidMount() {
		// call an API to get the team members invloved in the project, project activities & manager activities
		fetch('https://api.myjson.com/bins/1bf673')
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						loading: false,
						profiles: result.teamMembers,
						projectActivities: result.projectActivities,
						managerActivity: result.managerActivity
					});
				},
				error => {
					console.log('API failed: ', error);
				}
			);
	}

	hideRightContainer = data => {
		this.setState({ isRightContainerVisible: data });
	};

	render() {
		const { profiles, projectActivities, managerActivity, isRightContainerVisible, loading } = this.state;
		let currentUser = profiles && profiles[0];
		return (
			<div className='App'>
				{profiles && Object.keys(profiles).length >= 1 ? (
					// profile details in the hamburger menu
					<Menu currentUser={currentUser} hideRightContainer={this.hideRightContainer} />
				) : null}
				<div className={`right-container ${isRightContainerVisible ? 'hide-right-container' : ''}`}>
					{/* dummy search */}
					<div className='header inner-padding'>
						<FontAwesomeIcon icon={faSearch} className='search-icon' />
						Search...
					</div>
					<div className='body-container first-layer-padding'>
						{loading ? (
							// show loader until the api call is success
							<div className='loader'>
								<img src={loader} />
							</div>
						) : (
							// show the widgets
							<>
								<Card data={projectActivities} type={'Project Activity'} />
								<Card data={profiles} type={'Team Members'} className={'team-members'} />
								<Card data={managerActivity} type={'Manager Activity'} />
							</>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
