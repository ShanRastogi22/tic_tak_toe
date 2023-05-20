import React, { useState } from 'react';
import Sq from './Sq';
const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isTurn, setIsTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];


        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };
    const isWinner = checkWinner();


    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        // console.log("index",index)
        const copyState = [...state];
        copyState[index] = isTurn ? "X" : "O";
        setState(copyState);
        setIsTurn(!isTurn);
    }
    const handleReset = () => {
        setState(Array(9).fill(null));
    };
    // console.log("state",state)
    return (
        <div className='board-con'>
            {isWinner ? (
                <>{isWinner} Won the game <button onClick ={handleReset}> Play Again</button></>
            ) : (
                <> 
                <h3>Player {isTurn ? "X" : "O"} please move </h3>
                    <div className='borad-row'>
                        <Sq onClick={() => handleClick(0)} value={state[0]} />
                        <Sq onClick={() => handleClick(1)} value={state[1]} />
                        <Sq onClick={() => handleClick(2)} value={state[2]} />

                    </div>
                    <div className='borad-row'>
                        <Sq onClick={() => handleClick(3)} value={state[3]} />
                        <Sq onClick={() => handleClick(4)} value={state[4]} />
                        <Sq onClick={() => handleClick(5)} value={state[5]} />

                    </div>
                    <div className='borad-row'>
                        <Sq onClick={() => handleClick(6)} value={state[6]} />
                        <Sq onClick={() => handleClick(7)} value={state[7]} />
                        <Sq onClick={() => handleClick(8)} value={state[8]} />

                    </div>
                </>)}
        </div >
    )
}

export default Board
