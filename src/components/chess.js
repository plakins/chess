import * as figures from './figures';

export default class Chess {
	constructor(el, moveCallback) {
		this.canvas = el;
		this.moveCallback = moveCallback;
		this.canvas.width = "400";
		this.canvas.height = "400";
		this.ctx = this.canvas.getContext("2d");
		this.fieldSize = 400;
		this.cellSize = 50;
		this.black = "#b58763";
		this.white ="#f0dab5";
		figures
		this.board = figures.board();
		this.selectionBoard = figures.selectionBoard();
		this.selected = false;
		this.turn = figures.WHITE;
		this.coords = {
			x : null,
			y : null,
		}
		this.canvas.addEventListener('click', this.clickHandler);
	}  

	move = (data) => {
		this.board[data.to.y][data.to.x] = this.board[data.from.y][data.from.x];
		this.board[data.from.y][data.from.x] = 0;
		this.render();
	}

	clickHandler = (e) => {
		let x = Math.floor(e.offsetX / this.cellSize); 
		let y = Math.floor(e.offsetY / this.cellSize); 

		if (this.selected && this.selectionBoard[y][x] === 1) {
			this.board[y][x] = this.board[this.coords.y][this.coords.x];
			this.board[this.coords.y][this.coords.x] = 0;
			this.selected = false;
			this.turn = this.turn === figures.WHITE ?figures.BLACK : figures.WHITE;
			const data = {
				nextTurn : this.turn,
				from : {...this.coords},
				to : {x, y}
			}
			this.moveCallback(data);
			this.clearSelection();
			this.render();
			
			return;
		}
		
		if (this.selected && this.coords.x === x && this.coords.y === y) {
			this.selected = false;
			this.clearSelection();
			this.render();
			return;
		}

		if (this.board[y][x] !== 0) {
			if (this.board[y][x].color !== this.turn) {
				return;
			}
			this.selected = true;
			this.coords.x = x;
			this.coords.y = y;

			this.clearSelection();
			this.renderMoves(); 
			this.render();
		} else {
			this.selected = false;
			this.clearSelection();
			this.render();
		}
	}

	renderMoves = () => {
		const { x, y } = this.coords;

		const type = this.board[y][x].type;
		const color = this.board[y][x].color;
		const { BLACK, WHITE } = figures;
		let i, j;
		const ENEMY_COLOR = color === WHITE ? BLACK : WHITE;

		switch (type) {
			case figures.PAWN:
				if (color === WHITE) {
					if ((y - 1 > -1) && this.board[y - 1][x] === 0) {
						this.selectionBoard[y - 1][x] = 1;
					}
					if (y === 6) {
						if ((y - 2 > -1) && this.board[y - 2][x] === 0 && this.board[y - 1][x] === 0) {
							this.selectionBoard[y - 2][x] = 1;
						}
					}
					if ((y - 1 > -1) && (x + 1 < 8) && this.board[y - 1][x + 1].color === ENEMY_COLOR) {
						this.selectionBoard[y - 1][x + 1] = 1;
					}
					if ((y - 1 > -1) && (x - 1 > -1) && this.board[y - 1][x - 1].color === ENEMY_COLOR) {
						this.selectionBoard[y - 1][x - 1] = 1;
					}
				} else {
					if ((y + 1 < 8) && this.board[y + 1][x] === 0) {
						this.selectionBoard[y + 1][x] = 1;
					}
					if (y === 1) {
						if ((y + 2 < 8) && this.board[y + 2][x] === 0 && this.board[y + 1][x] === 0) {
							this.selectionBoard[y + 2][x] = 1;
						}
					}
					if ((y + 1 < 8) && (x + 1 < 8) && this.board[y + 1][x + 1].color === ENEMY_COLOR) {
						this.selectionBoard[y + 1][x + 1] = 1;
					}
					if ((y + 1 < 8) && (x - 1 > -1) && this.board[y + 1][x - 1].color === ENEMY_COLOR) {
						this.selectionBoard[y + 1][x - 1] = 1;
					}
				}
				break;

			case figures.ROOK:
				// FORWARD
				i = y;
				j = x;
				while ((i > 0) && this.board[i - 1][j] === 0) {
					i -= 1;
					this.selectionBoard[i][j] = 1;
				}
				if (this.board[i - 1] && this.board[i - 1][j].color === ENEMY_COLOR) {
					this.selectionBoard[i - 1][j] = 1;
				}
				// BACKWARD
				i = y;
				j = x;
				while ((i < 7) && this.board[i + 1][j] === 0) {
					i += 1;
					this.selectionBoard[i][j] = 1;
				}
				if (this.board[i + 1] && this.board[i + 1][j].color === ENEMY_COLOR) {
					this.selectionBoard[i + 1][j] = 1;
				}
				// LEFT
				i = y;
				j = x;
				while ((j > 0) && this.board[i][j - 1] === 0) {
					j -= 1;
					this.selectionBoard[i][j] = 1;
				}
				if (this.board[i][j - 1] && this.board[i][j - 1].color === ENEMY_COLOR) {
					this.selectionBoard[i][j - 1] = 1;
				}
				// RIGHT
				i = y;
				j = x;
				while ((j < 7) && this.board[i][j + 1] === 0) {
					j += 1;
					this.selectionBoard[i][j] = 1;
				}
				if (this.board[i][j + 1] && this.board[i][j + 1].color === ENEMY_COLOR) {
					this.selectionBoard[i][j + 1] = 1;
				}
				break;

			case figures.KNIGHT:
				if ((y - 2 > -1) && (x + 1 < 8) && ((this.board[y - 2][x + 1] === 0) || (this.board[y - 2][x + 1].color === ENEMY_COLOR))) {
					this.selectionBoard[y - 2][x + 1] = 1;
				} 
				if ((y - 2 > -1) && (x - 1 > -1) && ((this.board[y - 2][x - 1] === 0) || (this.board[y - 2][x - 1].color === ENEMY_COLOR))) {
					this.selectionBoard[y - 2][x - 1] = 1;
				} 
				if ((y - 1 > -1) && (x + 2 < 8) && ((this.board[y - 1][x + 2] === 0) || (this.board[y - 1][x + 2].color === ENEMY_COLOR))) {
					this.selectionBoard[y - 1][x + 2] = 1;
				} 
				if ((y + 1 < 8) && (x + 2 < 8) && ((this.board[y + 1][x + 2] === 0) || (this.board[y + 1][x + 2].color === ENEMY_COLOR))) {
					this.selectionBoard[y + 1][x + 2] = 1;
				} 
				if ((y + 2 < 8) && (x + 1 < 8) && ((this.board[y + 2][x + 1] === 0) || (this.board[y + 2][x + 1].color === ENEMY_COLOR))) {
					this.selectionBoard[y + 2][x + 1] = 1;
				} 
				if ((y + 2 < 8) && (x - 1 > -1) && ((this.board[y + 2][x - 1] === 0) || (this.board[y + 2][x - 1].color === ENEMY_COLOR))) {
					this.selectionBoard[y + 2][x - 1] = 1;
				} 
				if ((y + 1 < 8) && (x - 2 > -1) && ((this.board[y + 1][x - 2] === 0) || (this.board[y + 1][x - 2].color === ENEMY_COLOR))) {
					this.selectionBoard[y + 1][x - 2] = 1;
				} 
				if ((y - 1 > -1) && (x - 2 > -1) && ((this.board[y - 1][x - 2] === 0) || (this.board[y - 1][x - 2].color === ENEMY_COLOR))) {
					this.selectionBoard[y - 1][x - 2] = 1;
				} 
				break;
				
			case figures.BISHOP:
				// TOP RIGHT
				i = y;
				j = x;
				while ((i > 0) && (j < 7) && this.board[i - 1][j + 1] === 0) {
					i -= 1;
					j += 1;
					this.selectionBoard[i][j] = 1;
				}
				i -= 1;
				j += 1;
				if (this.board[i] && this.board[i][j] && this.board[i][j].color === ENEMY_COLOR) {
					this.selectionBoard[i][j] = 1;
				}
				// TOP LEFT
				i = y;
				j = x;
				while ((i > 0) && (j > 0) && this.board[i - 1][j - 1] === 0) {
					i -= 1;
					j -= 1;
					this.selectionBoard[i][j] = 1;
				}
				i -= 1;
				j -= 1;
				if (this.board[i] && this.board[i][j] && this.board[i][j].color === ENEMY_COLOR) {
					this.selectionBoard[i][j] = 1;
				}
				// BOTTOM RIGHT
				i = y;
				j = x;
				while ((i < 7) && (j < 7) && this.board[i + 1][j + 1] === 0) {
					i += 1;
					j += 1;
					this.selectionBoard[i][j] = 1;
				}
				i += 1;
				j += 1;
				if (this.board[i] && this.board[i][j] && this.board[i][j].color === ENEMY_COLOR) {
					this.selectionBoard[i][j] = 1;
				}
				// BOTTOM LEFT
				i = y;
				j = x;
				while ((i < 7) && (j > 0) && this.board[i + 1][j - 1] === 0) {
					i += 1;
					j -= 1;
					this.selectionBoard[i][j] = 1;
				}
				i += 1;
				j -= 1;
				if (this.board[i] && this.board[i][j] && this.board[i][j].color === ENEMY_COLOR) {
					this.selectionBoard[i][j] = 1;
				}
				break;

			case figures.QUEEN:
				// FORWARD
				i = y;
				j = x;
				while ((i > 0) && this.board[i - 1][j] === 0) {
					i -= 1;
					this.selectionBoard[i][j] = 1;
				}
				if (this.board[i - 1] && this.board[i - 1][j].color === ENEMY_COLOR) {
					this.selectionBoard[i - 1][j] = 1;
				}
				// BACKWARD
				i = y;
				j = x;
				while ((i < 7) && this.board[i + 1][j] === 0) {
					i += 1;
					this.selectionBoard[i][j] = 1;
				}
				if (this.board[i + 1] && this.board[i + 1][j].color === ENEMY_COLOR) {
					this.selectionBoard[i + 1][j] = 1;
				}
				// LEFT
				i = y;
				j = x;
				while ((j > 0) && this.board[i][j - 1] === 0) {
					j -= 1;
					this.selectionBoard[i][j] = 1;
				}
				if (this.board[i][j - 1] && this.board[i][j - 1].color === ENEMY_COLOR) {
					this.selectionBoard[i][j - 1] = 1;
				}
				// RIGHT
				i = y;
				j = x;
				while ((j < 7) && this.board[i][j + 1] === 0) {
					j += 1;
					this.selectionBoard[i][j] = 1;
				}
				if (this.board[i][j + 1] && this.board[i][j + 1].color === ENEMY_COLOR) {
					this.selectionBoard[i][j + 1] = 1;
				}
				// TOP RIGHT
				i = y;
				j = x;
				while ((i > 0) && (j < 7) && this.board[i - 1][j + 1] === 0) {
					i -= 1;
					j += 1;
					this.selectionBoard[i][j] = 1;
				}
				i -= 1;
				j += 1;
				if (this.board[i] && this.board[i][j] && this.board[i][j].color === ENEMY_COLOR) {
					this.selectionBoard[i][j] = 1;
				}
				// TOP LEFT
				i = y;
				j = x;
				while ((i > 0) && (j > 0) && this.board[i - 1][j - 1] === 0) {
					i -= 1;
					j -= 1;
					this.selectionBoard[i][j] = 1;
				}
				i -= 1;
				j -= 1;
				if (this.board[i] && this.board[i][j] && this.board[i][j].color === ENEMY_COLOR) {
					this.selectionBoard[i][j] = 1;
				}
				// BOTTOM RIGHT
				i = y;
				j = x;
				while ((i < 7) && (j < 7) && this.board[i + 1][j + 1] === 0) {
					i += 1;
					j += 1;
					this.selectionBoard[i][j] = 1;
				}
				i += 1;
				j += 1;
				if (this.board[i] && this.board[i][j] && this.board[i][j].color === ENEMY_COLOR) {
					this.selectionBoard[i][j] = 1;
				}
				// BOTTOM LEFT
				i = y;
				j = x;
				while ((i < 7) && (j > 0) && this.board[i + 1][j - 1] === 0) {
					i += 1;
					j -= 1;
					this.selectionBoard[i][j] = 1;
				}
				i += 1;
				j -= 1;
				if (this.board[i] && this.board[i][j] && this.board[i][j].color === ENEMY_COLOR) {
					this.selectionBoard[i][j] = 1;
				}
				break;

			case figures.KING:
				// TOP
				i = y - 1;
				j = x;
				if (this.board[i] && (this.board[i][j] !== undefined) && (this.board[i][j] === 0 || this.board[i][j].color === ENEMY_COLOR)) {
					this.selectionBoard[i][j] = 1;
				}
				// BOTTOM
				i = y + 1;
				j = x;
				if (this.board[i] && (this.board[i][j] !== undefined) && (this.board[i][j] === 0 || this.board[i][j].color === ENEMY_COLOR)) {
					this.selectionBoard[i][j] = 1;
				}
				// LEFT
				i = y;
				j = x + 1;
				if (this.board[i] && (this.board[i][j] !== undefined) && (this.board[i][j] === 0 || this.board[i][j].color === ENEMY_COLOR)) {
					this.selectionBoard[i][j] = 1;
				}
				// RIGHT
				i = y;
				j = x - 1;
				if (this.board[i] && (this.board[i][j] !== undefined) && (this.board[i][j] === 0 || this.board[i][j].color === ENEMY_COLOR)) {
					this.selectionBoard[i][j] = 1;
				}
				// TOP LEFT
				i = y - 1;
				j = x + 1;
				if (this.board[i] && (this.board[i][j] !== undefined) && (this.board[i][j] === 0 || this.board[i][j].color === ENEMY_COLOR)) {
					this.selectionBoard[i][j] = 1;
				}
				// TOP RIGHT
				i = y - 1;
				j = x - 1;
				if (this.board[i] && (this.board[i][j] !== undefined) && (this.board[i][j] === 0 || this.board[i][j].color === ENEMY_COLOR)) {
					this.selectionBoard[i][j] = 1;
				}
				// BOTTOM LEFT
				i = y + 1;
				j = x - 1;
				if (this.board[i] && (this.board[i][j] !== undefined) && (this.board[i][j] === 0 || this.board[i][j].color === ENEMY_COLOR)) {
					this.selectionBoard[i][j] = 1;
				}
				// BOTTOM RIGHT
				i = y + 1;
				j = x + 1;
				if (this.board[i] && (this.board[i][j] !== undefined) && (this.board[i][j] === 0 || this.board[i][j].color === ENEMY_COLOR)) {
					this.selectionBoard[i][j] = 1;
				}
		}
	}

	clearSelection = () => {
		for (let i = 0; i < this.selectionBoard.length; i++) {
			for (let j = 0; j < this.selectionBoard[i].length; j++) {
				if (this.selectionBoard[i][j] === 1) {
					this.selectionBoard[i][j] = 0;
				}
			}
		}
	}

	render = () => {
		this.ctx.clearRect(0, 0, this.fieldSize, this.fieldSize);

		for (let i = 0; i < this.board.length; i++) {
			for (let j = 0; j < this.board[i].length; j++) {
				if (i % 2 == 0) {
					if (j % 2 == 0) {
						this.ctx.fillStyle = this.white;
					} else {
						this.ctx.fillStyle = this.black;
					}
				} else {
					if (j % 2 == 0) {
						this.ctx.fillStyle = this.black;
					} else {
						this.ctx.fillStyle = this.white;
					}
				}
				this.ctx.fillRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
			}
		}

		if (this.selected) {
			this.ctx.fillStyle = "rgba(186, 199, 0, 0.4)";
			this.ctx.fillRect(this.coords.x * this.cellSize, this.coords.y * this.cellSize, this.cellSize, this.cellSize);
		}

		for (let i = 0; i < this.board.length; i++) {
			for (let j = 0; j < this.board[i].length; j++) {
				if (this.board[i][j] !== 0 && this.board[i][j] !== 1) {
					this.ctx.drawImage(this.board[i][j].img, j * this.cellSize + 5, i * this.cellSize + 5, this.cellSize - 10, this.cellSize - 10);
				}
			}
		}

		this.ctx.fillStyle = "rgba(186, 199, 0, 0.4)";
		for (let i = 0; i < this.selectionBoard.length; i++) {
			for (let j = 0; j < this.selectionBoard[i].length; j++) {
				if (this.selectionBoard[i][j] === 1) {
					this.ctx.fillRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
				}
			}
		}
	}


}


