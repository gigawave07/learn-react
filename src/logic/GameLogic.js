import {useState} from "react";

export default function useGameLogic() {

    let [game, setGame] = useState({
        history: [
            {squares: Array(9).fill(null)}
        ],
        squares: [null],
        xIsNext: true,
        lineWon: []
    })

    const handleClick = (i) => {
        const history = game.history
        const squares = history[history.length - 1].squares.slice()
        if (isWin(squares) || squares[i]) return
        squares[i] = game.xIsNext ? 'X' : 'O'
        setGame({
            history: game.history.concat([{squares: squares}]),
            squares: squares,
            xIsNext: !game.xIsNext,
            lineWon: isWin(squares)?.[1]
        })
    }

    const jumpTo = (i) => {
        const history = game.history.slice()
        setGame({
            history: history.slice(0, i + 1),
            squares: history[i].squares,
            xIsNext: !(i % 2)
        })

    }

    const isEnd = (squares) => {
        return !squares.includes(null)
    }

    const isWin = (squares) => {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < win.length; i++) {
            const [a, b, c] = win[i]
            if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
                return [squares[a], win[i]]
            }
        }
        return null
    }

    return {
        game,
        setGame,
        handleClick,
        jumpTo,
        isWin,
        isEnd
    }
}
