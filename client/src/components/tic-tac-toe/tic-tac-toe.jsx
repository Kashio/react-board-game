import React, {useCallback} from 'react';
import './tic-tac-toe.scss';
import update from 'immutability-helper';
import Board from '@/board/board';
import ScoreList from '@/score-list/score-list';
import {isGameOver, isDraw} from '../../utils/tic-tac-toe';
import x from '#/images/x.svg';
import o from '#/images/o.svg';
import restart from '#/images/restart.svg';

const X = 0;
const O = 1;
const EMPTY = 2;

const xImg = <img className="xo" src={x}/>;
const oImg = <img className="xo" src={o}/>;

const IMAGE_MAP = {
    [X]: xImg,
    [O]: oImg
};

const INITIAL_STATE = {
    turn: 0,
    players: [{
        score: 0
    }, {
        score: 0
    }],
    board: [
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY]
    ]
};

class TicTacToe extends React.Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;
    }

    renderBox = (row, column) => {
        const {board} = this.state;
        const value = board[row][column];
        if (value === EMPTY) {
            return null;
        }
        return IMAGE_MAP[value];
    };

    boxClickHandler = (row, column) => {
        const {turn, players, board} = this.state;
        const value = board[row][column];
        if (value === EMPTY) {
            const newBoard = update(board, {[row]: {$splice: [[column, 1, turn % 2]]}});
            if (isGameOver(newBoard, row, column)) {
                // React will batch both setStates since it's in onClick event handler
                const newPlayers = update(players, {
                    [turn % 2]: {
                        score: {
                            $apply: function (s) {
                                return s + 1;
                            }
                        }
                    }
                });
                this.setState({
                    turn: INITIAL_STATE.turn,
                    players: newPlayers,
                    board: INITIAL_STATE.board
                });
            } else if (isDraw(board, turn)) {
                this.setState({
                    turn: INITIAL_STATE.turn,
                    players,
                    board: INITIAL_STATE.board
                });
            }
            else {
                this.setState({
                    turn: turn + 1,
                    board: newBoard
                });
            }
        }
    };

    resetGame = () => {
        this.setState({
            ...INITIAL_STATE
        });
    };

    render() {
        const {players, board} = this.state;
        return <div className="tic-tac-toe">
            <div className="tic-tac-toe-row">
                <div className="tic-tac-toe-wrapper">
                    <h1 className="title">
                        Tic - Tac - Toe
                    </h1>
                </div>
            </div>
            <div className="tic-tac-toe-row">
                <div className="tic-tac-toe-wrapper">
                    <Board
                        board={board}
                        width={400}
                        height={400}
                        isGameOver={isGameOver}
                        boxTemplate={this.renderBox}
                        onBoxClick={this.boxClickHandler}/>
                </div>
            </div>
            <div className="tic-tac-toe-row">
                <div className="tic-tac-toe-wrapper">
                    <div className="scores-and-reset">
                        <ScoreList
                            width={340}
                            height={100}
                            players={players}/>
                        <button className="reset-button" onClick={this.resetGame}>
                            Reset
                            <img src={restart}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default TicTacToe;