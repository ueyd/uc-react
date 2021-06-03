import React from 'react'
import { Board, BoardProps, BoardType } from './Board';
import {BarGame} from './BarGame'
import { PieceGame, PieceGameType } from './PieceGame';
import { Button } from '@material-ui/core';

export type GameType= {
    board:BoardType;
    boardPieces:PieceGameType[][],
}

export interface GameState{
    game: GameType,
}

export class Game extends React.Component<{}, GameState>{

    initialState = {
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

    state = Object.assign(this.initialState);

    constructor(props: {}){
        super(props);
        this.turnPlayer = this.turnPlayer.bind(this);
        this.onPieceClicked = this.onPieceClicked.bind(this);
        
        this.setState(this.initialState);
    }

    validateWinner(){
        const {boardPieces} = this.state.game;
        let winner = '';
        let vertical:string[][] = []
        for (let i = 0; i < boardPieces.length; i++) {
            const row = boardPieces[i];
            //Validar lineas horizontal
            if(row[0].currentPlayer != ''
                && row[0].currentPlayer === row[1].currentPlayer
                && row[1].currentPlayer === row[2].currentPlayer)
                winner = row[0].currentPlayer;
            
            //Validar lineas verticales
            for (let j = 0; j < row.length; j++) {
                const col = row[j].currentPlayer;
                vertical[j] = (vertical[j] === undefined ? [] : vertical[j]);
                vertical[j][i] = col;
            }
            
            for (let h = 0; h < vertical.length; h++) {
                const col = vertical[h];
                if(col[0] != ''
                && col[0] === col[1]
                && col[1] === col[2])
                winner = col[0];
            }
        }

        //Diagonales
        // \
        let c1 = boardPieces[0][0].currentPlayer, 
            c2 = boardPieces[1][1].currentPlayer, 
            c3 = boardPieces[2][2].currentPlayer;
        if(winner === '' && c1!=='' && c1===c2 && c2===c3)
            winner = c1;
        // /
        c1 = boardPieces[0][2].currentPlayer; 
        c2 = boardPieces[1][1].currentPlayer; 
        c3 = boardPieces[2][0].currentPlayer;
        if(winner === '' && c1!=='' && c1===c2 && c2===c3)
            winner = c1;
        return winner;
    }

    onPieceClicked(rid?:number, cid?:number){
        const {currentPlayer, winner} = this.state.game.board;
        const {boardPieces} = this.state.game;
        //const {turnPlayer} = this.state;
        if(winner === '' && boardPieces[rid??0][cid??0].currentPlayer === ""){
            boardPieces[rid??0][cid??0].currentPlayer = currentPlayer;
            const newCurrentPlayer = currentPlayer === "Y" || currentPlayer == "" ? "X" : "Y";
            //Validar si hay gane
            const winner = this.validateWinner();
            this.turnPlayer({currentPlayer: newCurrentPlayer, winner});
        }
    }

    turnPlayer(board:BoardType){
        this.setState((state) => {
            let obj = {
                board: board,
                boardPieces: state.game.boardPieces
            }
            return {game : obj}
        });
    }

    restartGame(){
        this.initialState.game.boardPieces = [
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
            ]
        ];
        this.setState(this.initialState);
    }

    render(){
        return (
            <div className="game">
                <Button onClick={() => this.restartGame()}>Restart </Button>
                <BarGame
                    currentPlayer={this.state.game.board.currentPlayer} 
                    winner={this.state.game.board.winner} 
                    bgColor="red"/>
                <Board 
                    game={this.state.game}
                    turnPlayer={this.turnPlayer}
                    onPieceClicked={this.onPieceClicked}
                />
            </div>
        )
    }
}