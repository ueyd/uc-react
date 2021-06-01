import { Divider } from '@material-ui/core';
import { stat } from 'fs';
import React from 'react'
import { PieceGame, PieceGameProps } from './PieceGame';


export type BoardProps = {
    turnPlayer(newCurrentPlayer:string, winner:string):void,
    currentPlayer:string,
    winner:string
}

interface BoardState {
    currentPlayer:string,
    boardPieces:PieceGameProps[][],
    
}

export class Board extends React.Component<BoardProps, BoardState>{
    
    state:BoardState = {
        currentPlayer: "X",
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
        ],
    }

    constructor(props:BoardProps){
        super(props);
        this.onPieceClicked = this.onPieceClicked.bind(this);
        this.setState({
            currentPlayer: this.props.currentPlayer
        });
    }

    onPieceClicked(rid?:number, cid?:number){
        this.setState((state, props) => {
            if(props.winner === '' && state.boardPieces[rid??0][cid??0].currentPlayer === ""){
                state.boardPieces[rid??0][cid??0].currentPlayer = state.currentPlayer;
                const {currentPlayer} = state;
                const newCurrentPlayer = currentPlayer === "Y" || currentPlayer == "" ? "X" : "Y";
                
                //Validar si hay gane
                const winner = this.validateWinner(state);
                props.turnPlayer(newCurrentPlayer, winner);
                
                return { currentPlayer: newCurrentPlayer};
            }
            return { currentPlayer: state.currentPlayer};
        });
    }

    validateWinner(state:BoardState){
        
        let winner = '';
        let vertical:string[][] = []
        for (let i = 0; i < state.boardPieces.length; i++) {
            const row = state.boardPieces[i];
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
        console.log(winner !== '');
        let c1 = state.boardPieces[0][0].currentPlayer, 
            c2 = state.boardPieces[1][1].currentPlayer, 
            c3 = state.boardPieces[2][2].currentPlayer;
        if(winner === '' && c1!=='' && c1===c2 && c2===c3)
            winner = c1;
        c1 = state.boardPieces[0][2].currentPlayer; 
        c2 = state.boardPieces[1][1].currentPlayer; 
        c3 = state.boardPieces[2][0].currentPlayer;
        if(winner === '' && c1!=='' && c1===c2 && c2===c3)
            winner = c1;
        return winner;
    }

    render(){
        const board = [];
        for (let i = 0; i < this.state.boardPieces.length; i++) {
            const pieces = this.state.boardPieces[i];
            for (let j = 0; j < pieces.length; j++) {
                const piece = pieces[j];
                board.push(<PieceGame 
                    currentPlayer={this.state.currentPlayer} 
                    rid={i}
                    cid={j}
                    handlerPiece={this.props.winner === '' ? this.onPieceClicked : undefined}/>) 
            }
            board.push(<br/>)
        }

        return (
            <div className="boardGame">
                {board}
            </div>
        )
    }
}