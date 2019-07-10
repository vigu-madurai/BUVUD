import React, { PureComponent } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Card } from './modules/Card/index';
import { Menu } from './modules/Menu/index';

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			profiles: null,
			projectActivities: null,
			managerActivity: null
		};
	}
	componentDidMount() {
		// call an API to get the team members invloved in the project, project activities & manager activities
		fetch('https://api.myjson.com/bins/1358qf')
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						profiles: result.teamMembers,
						projectActivities: result.projectActivities
						// managerActivity: result.managerActivity // TODO
					});
				},
				error => {
					console.log('API failed: ', error);
				}
			);
	}

	render() {
		const { profiles, projectActivities } = this.state;
		let currentUser = profiles && profiles[0];
		return (
			<div className='App'>
				{profiles && Object.keys(profiles).length >= 1 ? <Menu currentUser={currentUser} /> : null}
				<div className='right-container'>
					<div className='header inner-padding'>
						<FontAwesomeIcon icon={faSearch} className='search-icon' />
						Search...
					</div>
					<div className='body-container first-layer-padding'>
						<Card data={profiles} type={'Team Members'} className='team-members' />
						<Card data={projectActivities} type={'Project Activity'} />
						{/* <Card data={managerActivity} type={'Manager Activity'} /> */}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
