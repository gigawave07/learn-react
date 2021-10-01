import React from "react";
import useGameLogic from "../../logic/GameLogic";
import Board from "./Board";

export default function Game() {

    const {
        game,
        handleClick,
        jumpTo,
    } = useGameLogic()

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    game={game}
                    onClick={handleClick}
                />
            </div>
            <div className="game-info">
                {game.history.map((squares, i) => {
                    return (
                        <div key={i}>
                            <button onClick={() => jumpTo(i)}>
                                {i ? `Go to turn #${i}` : `Reset Game`}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

