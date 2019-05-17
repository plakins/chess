import React from 'react';
import '../styles/app.css';
import Game from './Game';


export default class App extends React.Component {
	render() {
		return (
			<Game params={this.props.match.params}/>
		)
	}	
}