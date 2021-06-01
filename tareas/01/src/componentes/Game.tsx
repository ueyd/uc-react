import React from 'react'
import { Board, BoardProps, BoardType } from './Board';
import {BarGame} from './BarGame'
import { PieceGame, PieceGameType } from './PieceGame';

export type GameType= {
    board:BoardType;
    boardPieces:PieceGameType[][],
}

export interface GameState{
    game: GameType,
}

export class Game extends React.Component<{}, GameState>{

    state:GameState = {
        game: {
            board:{
                currentPlayer: 'X',
                winner: '',
            },
            boardPieces: [
            [
                {
                    currentPlayer: ""
                },
                {
                    currentPlayer: ""
                },
                {
                    currentPlayer: ""
                }
            ],
            [
                {
                    currentPlayer: ""
                },
                {
                    currentPlayer: ""
                },
                {
                    currentPlayer: ""
                }
            ],
            [
                {
                    currentPlayer: ""
                },
                {
                    currentPlayer: ""
                },
                {
                    currentPlayer: ""
                }
            ],
        ]}
    }

    constructor(props: {}){
        super(props);
        this.turnPlayer = this.turnPlayer.bind(this);
    }

    turnPlayer(board:BoardType){
        this.setState({
            game: {
                board: board,
                boardPieces: this.state.game.boardPieces
            }
        });
    }

    render(){
        return (
            <div className="game">
                <BarGame 
                    currentPlayer={this.state.game.board.currentPlayer} 
                    winner={this.state.game.board.winner} 
                    bgColor="red"/>
                <Board 
                    game={this.state.game}
                    turnPlayer={this.turnPlayer}
                />
            </div>
        )
    }
}