import useGameLogic from "../../logic/GameLogic";
import React from "react";

function Square(props) {

    const {isWin} = useGameLogic()

    const lineWon = isWin(props.game.squares)?.[1]
    const highlight = lineWon ? lineWon.includes(props.idx) ? 'red' : '' : ''

    return (
        <button className={`square ${highlight}`}
                onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default function Board(props) {

    const {isWin, isEnd} = useGameLogic()

    const renderSquare = (i) => {
        return (
            <Square
                value={props.game.squares[i]}
                onClick={() => props.onClick(i)}
                game={props.game}
                idx={i}
            />
        )
    }

    const winner = isWin(props.game.squares)
    const status = isEnd(props.game.squares) ? `Game is draw` :
        winner ? `Player ${winner[0]} won` : `Next player: ${props.game.xIsNext ? 'X' : 'O'}`
    const board = [0, 3, 6].map(i => {
        const row = [0, 1, 2].map(j => {
            return <span key={j}>{renderSquare(i + j)}</span>
        })
        return (
            <div className="board-row" key={i}>
                {row}
            </div>
        )
    })

    return (
        <>
            <p>{status}</p>
            {board}
        </>
    )
}
