import React, {Component} from "react";

function Square(props) {
    return (
        <button className="square"
                onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

class Board extends Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        )
    }

    render() {
        const winner = isWin(this.props.squares)
        const status = winner ? `Player ${winner} won` : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`
        const board = [0, 3, 6].map(i => {
            const row = [0, 1, 2].map(j => {
                return <>{this.renderSquare(i + j)}</>
            })
            return (
                <div className="board-row">
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
}

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    handleClick = (i) => {
        const squares = [...this.state.squares]
        if (isWin(squares) || squares[i]) return
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            squares,
            xIsNext: !this.state.xIsNext
        })
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        onClick={this.handleClick}
                        xIsNext={this.state.xIsNext}
                    />
                </div>
            </div>
        )
    }
}

function isWin(squares) {
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
            return squares[a]
        }
    }
    return null
}
