import React, { useState, useEffect } from "react";
import PickMenu from "./pickMenu";

const BoardGame = (props) => {
	const [player, setPlayer] = useState(props.firstPlayer);
	const [board, setBoard] = useState(Array(9).fill(null));
	const [winner, setWinner] = useState(null);

	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	useEffect(() => {
		const checkWinner = () => {
			for (let condition of winConditions) {
				const [a, b, c] = condition;
				if (board[a] && board[a] === board[b] && board[a] === board[c]) {
					setWinner(board[a]);
					return;
				}
			}
			if (!board.includes(null)) {
				setWinner("Draw");
			}
		};
		checkWinner();
	}, [board]);

	const handleClick = (index) => {
		if (!board[index] && !winner) {
			const newBoard = board.slice();
			newBoard[index] = player.includes("X") ? "X" : "O";
			setBoard(newBoard);
			setPlayer((prev) => (prev === "It is X turn!" ? "It is O turn!" : "It is X turn!"));
		}
	};

	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setWinner(null);
		setPlayer(props.firstPlayer);
	};

	const renderSquare = (index) => (
		<div id={index} className="col" onClick={() => handleClick(index)}>
			{board[index]}
		</div>
	);

	if (winner) {
		return (
			<div className="board-game">
				<h2 className="winner-color">{winner === "Draw" ? "¡Empate!" : `El ganador es ${winner}`}</h2>
				<button onClick={resetGame}>Start Over</button>
				<button onClick={() => window.location.reload()}>Main Menu</button>
				<div className="container text-center">
					<div className="row">
						{renderSquare(0)}
						{renderSquare(1)}
						{renderSquare(2)}
					</div>
					<div className="row">
						{renderSquare(3)}
						{renderSquare(4)}
						{renderSquare(5)}
					</div>
					<div className="row">
						{renderSquare(6)}
						{renderSquare(7)}
						{renderSquare(8)}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="board-game">
			<h2>{player}</h2>
			<button onClick={resetGame}>Start Over</button>
			<button onClick={() => window.location.reload()}>Main Menu</button>
			<div className="container text-center">
				<div className="row">
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</div>
				<div className="row">
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</div>
				<div className="row">
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>
			</div>
		</div>
	);
};

export default BoardGame;
