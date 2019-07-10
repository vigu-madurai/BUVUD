import React, { PureComponent } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Card } from './modules/Card/index';
import { Menu } from './modules/Menu/index';
import { MainChart } from './modules/MainChart';

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			profiles: null
		};
	}
	componentDidMount() {
		// call an API to get the team members invloved in the project
		fetch('https://api.myjson.com/bins/bq60f')
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						profiles: result
					});
				},
				error => {
					console.log('User Profiles API fails: ', error);
				}
			);
	}

	render() {
		console.log(this.state);
		const profiles = this.state.profiles;
		let currentUser = profiles && profiles[0];
		console.log(currentUser);
		return (
			<div className='App'>
				<div className='left-container first-layer-padding'>
					{profiles && Object.keys(profiles).length >= 1 ? <Menu currentUser={currentUser} /> : null}
				</div>
				<div className='right-container'>
					<div className='header inner-padding'>
						<FontAwesomeIcon icon={faSearch} className='search-icon' />
						Search...
					</div>
					<div className='body-container first-layer-padding'>
						<Card />
						<MainChart />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
