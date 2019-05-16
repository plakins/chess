import React from 'react';
import Chess from './chess';
import { WHITE, BLACK } from './figures';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn : WHITE
        }
        this.canvas = React.createRef();
    }

    componentDidMount = () => {
        this.chess = new Chess(this.canvas.current, this.move);
        window.addEventListener('load', () => {
            this.chess.render();
        })
    }

    move = (data) => {
        this.setState({turn : data.nextTurn});
        console.log(data);
    }

    render() {
        return (
            <div>
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