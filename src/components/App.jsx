import React from 'react';
import '../styles/app.css';
import Chess from './chess';
import Game from './Game';


export default class App extends React.Component {
	render() {
		return (
			<Game/>
		)
	}	
}