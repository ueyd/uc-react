import React from 'react'
import { Board, BoardType } from './Board';
import {BarGame} from './BarGame'
import { PieceGameType } from './PieceGame';
import { Button } from '@material-ui/core';
import { NO_PLAYER, WINNER } from './Constantes';

export type GameType= {
    player1:Player,
    player2:Player,
    board:BoardType;
    boardPieces:PieceGameType[][],
}

export interface GameState{
    game: GameType,
}

export interface Player{
    icon:string,
    bgColor:string
}

export class Game extends React.Component<{}, GameState>{

    initialState(){
        
        let boardPieces:PieceGameType[][] = [];

        // let boardPieces2:Array<Array<PieceGameType>> = [];
        // const matrizLength:number[] = [3,3];


        // for (let i = 0; i < matrizLength[0]; i++) {
        //     //boardPieces[i] = [];
        //     let rowBoardPieces:Array<PieceGameType> = [];
        //     for (let j = 0; j < matrizLength[1]; j++) {
        //         rowBoardPieces.push({
        //             owner: NO_PLAYER
        //         });
        //         //console.log(NO_PLAYER)
        //         // boardPieces[i].push({
        //         //     owner: NO_PLAYER
        //         // });

        //         // boardPieces[i][j] = {
        //         //     owner: NO_PLAYER
        //         // };
        //         //console.log("boardPieces", j, boardPieces[i][j]);
        //         // boardPieces[i][j] = {
        //         //     owner: NO_PLAYER
        //         // };
        //         //boardPieces[i][j].owner = NO_PLAYER
        //     }
            
        //     boardPieces2.push(rowBoardPieces);
        // }
        // console.log(boardPieces2);
        const player1 = {
            icon: "X",
            bgColor:"#9600b1"
        };
        return {
            game: {
                player1: player1,
                player2: {
                    icon: "Y",
                    bgColor:"#4c8f00"
                },
                board:{
                    currentPlayer: player1,
                    winner: {
                        icon: "",
                        bgColor:"#4c8f00"
                    },
                },
                boardPieces: [
                    [
                        {
                            owner: NO_PLAYER
                        },
                        {
                            owner: NO_PLAYER
                        },
                        {
                            owner: NO_PLAYER
                        }
                    ],
                    [
                        {
                            owner: NO_PLAYER
                        },
                        {
                            owner: NO_PLAYER
                        },
                        {
                            owner: NO_PLAYER
                        }
                    ],
                    [
                        {
                            owner: NO_PLAYER
                        },
                        {
                            owner: NO_PLAYER
                        },
                        {
                            owner: NO_PLAYER
                        }
                    ]
                ]
            }
        }
    }

    state = this.initialState();

    constructor(props: {}){
        super(props);
        this.onPieceClicked = this.onPieceClicked.bind(this);
    }

    validateWinner(){
        const boardPieces = this.state.game.boardPieces;
        let winner:Player = {
            bgColor: '',
            icon: ''
        };
        let vertical:Player[][] = [];
        for (let i = 0; i < boardPieces.length; i++) {
            const row = boardPieces[i];
            //Validar lineas horizontal
            if(row[0].owner.icon !== NO_PLAYER.icon
                && row[0].owner.icon === row[1].owner.icon
                && row[1].owner.icon === row[2].owner.icon)
                winner.icon = row[0].owner.icon;

            //Validar lineas verticales
            for (let j = 0; j < row.length; j++) {
                const col = row[j].owner;
                vertical[j] = (vertical[j] === undefined ? [] : vertical[j]);
                vertical[j][i] = col;
            }

        }

        for (let h = 0; h < vertical.length; h++) {
            const col = vertical[h];
            if(col[0].icon !== ''
            && col[0].icon === col[1].icon
            && col[1].icon === col[2].icon)
            winner.icon = col[0].icon;
        }

        //Diagonales
        // \
        let c1 = boardPieces[0][0].owner.icon,
            c2 = boardPieces[1][1].owner.icon,
            c3 = boardPieces[2][2].owner.icon;
        if(winner.icon === NO_PLAYER.icon && c1!==NO_PLAYER.icon && c1===c2 && c2===c3)
            winner.icon = c1;
        // /
        c1 = boardPieces[0][2].owner.icon;
        c2 = boardPieces[1][1].owner.icon;
        c3 = boardPieces[2][0].owner.icon;
        if(winner.icon === NO_PLAYER.icon && c1!==NO_PLAYER.icon && c1===c2 && c2===c3)
            winner.icon = c1;
    
        // console.log(winner.icon, NO_PLAYER.icon);
        // if(winner.icon !== NO_PLAYER.icon)
        // {
        //     console.log(WINNER);
        //     winner = WINNER;
        // }
        return winner;
    }

    onPieceClicked(rid?:number, cid?:number){
        this.setState((state) => {
            const {currentPlayer, winner } = state.game.board;
            const {boardPieces, player1, player2} = state.game;
            if(winner.icon === NO_PLAYER.icon && boardPieces[rid??0][cid??0].owner.icon === NO_PLAYER.icon){
                //Actualizar el estado de la pieza
                boardPieces[rid??0][cid??0].owner = currentPlayer;
                //Actualizar el turno actual y ganador
                //const newCurrentPlayer = currentPlayer === "Y" || currentPlayer == "" ? "X" : "Y";
                const newCurrentPlayer:Player = currentPlayer.icon === player2.icon || currentPlayer.icon === NO_PLAYER.icon ? player1 : player2;
                //Validar si hay gane
                const winner = this.validateWinner();
                const game = {
                    player1: state.game.player1,
                    player2: state.game.player2,
                    board: {currentPlayer: winner.icon === NO_PLAYER.icon ? newCurrentPlayer : NO_PLAYER, winner},
                    boardPieces: boardPieces
                }
                
                return {game : game};
            }
            return {game : state.game};
        });
    }

    restartGame() {
        console.log(this.validateWinner());
        this.setState(this.initialState());
    }

    onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        console.log(name, value);
        // this.setState({
        //     [name]: value
        // });
    }

    render(){
        return (
            <div className="game">
                <input type="text" name="player1" onChange={() => this.onChange}/>
                <Button onClick={() => this.restartGame()}>Restart</Button>
                <BarGame
                    currentPlayer={this.state.game.board.currentPlayer}
                    winner={this.state.game.board.winner}
                    bgColor="red"/>
                <Board
                    game={this.state.game}
                    onPieceClicked={this.onPieceClicked}
                />
            </div>
        )
    }
}