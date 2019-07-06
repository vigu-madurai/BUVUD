import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Card } from './modules/Card/index';
import { Menu } from './modules/Menu/index';

function App() {
	return (
		<div className='App'>
			<div className='left-container first-layer-padding'>
				<Menu />
			</div>
			<div className='right-container'>
				<div className='header inner-padding'>
					<FontAwesomeIcon icon={faSearch} className='search-icon' />
					Search...
				</div>
				<div className='body-container first-layer-padding'>
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
