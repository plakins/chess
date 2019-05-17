import React from 'react';
import Chess from './chess/chess';
import { WHITE, BLACK } from './chess/figures';
import { encodeMove, decodeMove } from './chess/parser';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			turn : WHITE,
			waiting : false,
			playing : false,
			link : 'http://10.203.212.424/12/5645ghfhyrb5ytyt'
		}
		this.canvas = React.createRef();
	}

	componentDidMount = () => {
		if (this.props.params.gameId && this.props.params.token) {
			this.token = this.props.params.token;
			this.gameId = this.props.params.gameId;
			this.commit();
		}
	}

	newGame = () => {
		fetch('http://10.203.65.112/chess/new_game.php')
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			console.log(data);
			this.link = `${window.location.origin}/${data.gameId}/${data.token2}`;
			this.token = data.token1;
			this.gameId = data.gameId;
			this.commit(this.gameId, this.token);
		})
	}

	commit = () => {
		fetch(`http://10.203.65.112/chess/commit.php?id=${this.gameId}&token=${this.token}`)
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			if (data.status) {
				if (data.message === "wait") {
					this.waiting();
				} else if (data.message === "start") {
					this.side = data.side === 1 ? WHITE : BLACK;
					this.play();
				}
			}
		})
	}

	waiting = () => {
		this.setState({waiting : true, link : this.link});
		fetch(`http://10.203.65.112/chess/wait.php?id=${this.gameId}&token=${this.token}`)
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			if (data.status) {
				this.side = data.side === 1 ? WHITE : BLACK;
				this.play();
			} else {

			}
		})
	}

	play = () => {
		this.setState({waiting : false, playing : true});
		this.chess = new Chess(this.canvas.current, this.side, this.move);
		if (this.side === BLACK) {
			window.addEventListener('load', () => {
				this.chess.render();
				this.waitMove();
			});
		} else {
			this.chess.render();
		}
		
		alert('Игра началась!');
	}

	waitMove = () => {
		fetch(`http://10.203.65.112/chess/wait_move.php?id=${this.gameId}&token=${this.token}`)
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			if (data.status) {
				const decoded = decodeMove(data.data);
				this.setState({turn : this.state.turn === WHITE ? BLACK : WHITE});
				this.chess.move(decoded);
			} else {
				if (data.message === "timeout") {
					alert("Противник покинул игру");
				}
			}
		})
	}

	move = (data) => {
		data = encodeMove(data);
		this.setState({turn : this.state.turn === WHITE ? BLACK : WHITE});
		fetch(`http://10.203.65.112/chess/move.php?id=${this.gameId}&token=${this.token}&data=${data}`)
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			if (data.status) {
				this.waitMove();
			} else {
				alert(data.message);
			}
		})
	}

	render() {
		return (
			<div>
				{
					!(this.state.playing || this.state.waiting) && 
					<button onClick={this.newGame}>Играть</button>
				}
				
				{
					this.state.waiting &&
					<div>
						<h1>Ожидание соперника.</h1>
						<h2>Отправьте ему эту ссылку:</h2>
						<a>{this.state.link}</a>
					</div>
					
				}
				{
					this.state.playing &&
					<h1>Вы играете за {this.side === WHITE ? 'белых' : 'черных'}.</h1>
				}
				
				<h1>{this.state.turn === WHITE ? "Ход белых" : "Ход черных"}</h1>
				<div className="container">
					<canvas ref={this.canvas} id="canvas"></canvas>
					<div className="letters">
						<span className="letter">A</span>
						<span className="letter">B</span>
						<span className="letter">C</span>
						<span className="letter">D</span>
						<span className="letter">E</span>
						<span className="letter">F</span>
						<span className="letter">G</span>
						<span className="letter">H</span>
					</div>
					<div className="numbers">
						<span className="number">1</span>
						<span className="number">2</span>
						<span className="number">3</span>
						<span className="number">4</span>
						<span className="number">5</span>
						<span className="number">6</span>
						<span className="number">7</span>
						<span className="number">8</span>
					</div>
				</div>
				
			</div>
			
		)
	}
}