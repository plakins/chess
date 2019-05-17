export const WHITE = "WHITE";
export const BLACK = "BLACK";

export const PAWN = "PAWN";
export const ROOK = "ROOK";
export const KNIGHT = "KNIGHT";
export const BISHOP = "BISHOP";
export const KING = "KING";
export const QUEEN = "QUEEN";

// BLACK

export const BLACK_PAWN = {
	color : BLACK,
	type : PAWN,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/black/pawn.svg';
		return image;
	}(),
};

export const BLACK_ROOK = {
	color : BLACK,
	type : ROOK,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/black/rook.svg';
		return image;
	}(),
};

export const BLACK_KNIGHT = {
	color : BLACK,
	type : KNIGHT,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/black/knight.svg';
		return image;
	}(),
};

export const BLACK_BISHOP = {
	color : BLACK,
	type : BISHOP,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/black/bishop.svg';
		return image;
	}(),
};

export const BLACK_KING = {
	color : BLACK,
	type : KING,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/black/king.svg';
		return image;
	}(),
};

export const BLACK_QUEEN = {
	color : BLACK,
	type : QUEEN,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/black/queen.svg';
		return image;
	}(),
};

// WHITE

export const WHITE_PAWN = {
	color : WHITE,
	type : PAWN,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/white/pawn.svg';
		return image;
	}(),
};

export const WHITE_ROOK = {
	color : WHITE,
	type : ROOK,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/white/rook.svg';
		return image;
	}(),
};

export const WHITE_KNIGHT = {
	color : WHITE,
	type : KNIGHT,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/white/knight.svg';
		return image;
	}(),
};

export const WHITE_BISHOP = {
	color : WHITE,
	type : BISHOP,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/white/bishop.svg';
		return image;
	}(),
};

export const WHITE_KING = {
	color : WHITE,
	type : KING,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/white/king.svg';
		return image;
	}(),
};

export const WHITE_QUEEN = {
	color : WHITE,
	type : QUEEN,
	img : function() {
		let image = new Image(50, 50);
		image.src = '/src/images/white/queen.svg';
		return image;
	}(),
};


export function board() {
	return [
		[BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_QUEEN, BLACK_KING, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK],
		[BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
		[WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_QUEEN, WHITE_KING, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK],
	]
}

export function selectionBoard() {
	return [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
	]
}
