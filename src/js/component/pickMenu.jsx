import React, { useState } from "react";
import BoardGame from "./boardGame";

const PickMenu = () => {
	const [isSent, setIsSent] = useState(false);
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [firstPlayer, setFirstPlayer] = useState("");

	const handleClick = (symbol) => {
		if (player1 && player2) {
			setFirstPlayer(`It is ${symbol} turn!`);
			setIsSent(true);
		} else {
			alert("Please enter both player names.");
		}
	};

	const onChangePlayer1 = (e) => setPlayer1(e.target.value);
	const onChangePlayer2 = (e) => setPlayer2(e.target.value);

	if (isSent) {
		return <BoardGame firstPlayer={firstPlayer} player1={player1} player2={player2} />;
	}

	return (
		<div className="container-players">
			<h2>Pick A Weapon</h2>
			<div>
				<h3>CHOOSE YOUR WEAPON</h3>
				<div className="input-players">
					<input type="text" placeholder="Player 1" onChange={onChangePlayer1} />
					<input type="text" placeholder="Player 2" onChange={onChangePlayer2} />
				</div>
				<div className="button-player">
					<button onClick={() => handleClick("X")}>X</button>
					<button onClick={() => handleClick("O")}>O</button>
				</div>
			</div>
		</div>
	);
};

export default PickMenu;
