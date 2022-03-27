import React,{useState} from 'react';
import './TicTacToe.css';
const TicTacToe = () =>{
    const [winner, setWinner] = useState('');
    const [turn, setTurn] = useState('x');
    const [cells,setCells] = useState(Array(9).fill(''));
    const checkForWinner = (squares) => {
		let combos = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],	
        ];

        for (let i = 0; i < combos.length; i++) {
            const [a, b, c] = combos[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
            }
        }


	};
    const handleClick = (num) =>{
        if(cells[num] !== ''){
            alert('already clicked');
            return;
        }
        let squares = [...cells]
        if (turn === 'x') {
            squares[num] = 'x';
			setTurn('o');
		} else {
            squares[num] = 'o';
			setTurn('x');
		}
        checkForWinner(squares);
		setCells(squares);
    }
    const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};
    return (
        <div className='box'>
            <h2>Tic Tac Toe Game</h2>
            <table>
                <p>Turn: {turn}</p>
                <tbody>
                    <tr>
                        <td onClick = {() => handleClick(0)}>{cells[0]}</td>
                        <td onClick = {() => handleClick(1)}>{cells[1]}</td>
                        <td onClick = {() => handleClick(2)}>{cells[2]}</td>
                    </tr>
                    <tr>
                        <td onClick = {() => handleClick(3)}>{cells[3]}</td>
                        <td onClick = {() => handleClick(4)}>{cells[4]}</td>
                        <td onClick = {() => handleClick(5)}>{cells[5]}</td>
                    </tr>
                    <tr>
                        <td onClick = {() => handleClick(6)}>{cells[6]}</td>
                        <td onClick = {() => handleClick(7)}>{cells[7]}</td>
                        <td onClick = {() => handleClick(8)}>{cells[8]}</td>
                    </tr>
                </tbody>
            </table>
            <div className='Winning'>
                <p>
                    {winner} is the Winner!
                </p>
                <button onClick={() => handleRestart()}>Play Again</button>
            </div>
        </div>

    );
};
export default TicTacToe;