
import React from 'react'
import {GameState} from './Game'
import { PieceGame, PieceGameProps, PieceGameType } from './PieceGame';

export type BoardType = {
    currentPlayer:string,
    winner:string
}

export interface BoardProps extends GameState{
    turnPlayer(board:BoardType):void;
}

export class Board extends React.Component<BoardProps, {}>{

    constructor(props:BoardProps){
        super(props);
        this.onPieceClicked = this.onPieceClicked.bind(this);
    }

    onPieceClicked(rid?:number, cid?:number){
        const {currentPlayer, winner} = this.props.game.board;
        const {boardPieces} = this.props.game;
        const {turnPlayer} = this.props;
        if(winner === '' && boardPieces[rid??0][cid??0].currentPlayer === ""){
            boardPieces[rid??0][cid??0].currentPlayer = currentPlayer;
            const newCurrentPlayer = currentPlayer === "Y" || currentPlayer == "" ? "X" : "Y";
            //Validar si hay gane
            const winner = this.validateWinner();
            turnPlayer({currentPlayer: newCurrentPlayer, winner});
        }
    }

    validateWinner(){
        const {boardPieces} = this.props.game;
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
        c1 = boardPieces[0][2].currentPlayer; 
        c2 = boardPieces[1][1].currentPlayer; 
        c3 = boardPieces[2][0].currentPlayer;
        if(winner === '' && c1!=='' && c1===c2 && c2===c3)
            winner = c1;
        return winner;
    }

    render(){
        const board = [];
        const {currentPlayer, winner} = this.props.game.board;
        const {boardPieces} = this.props.game;
        for (let i = 0; i < boardPieces.length; i++) {
            const pieces = boardPieces[i];
            for (let j = 0; j < pieces.length; j++) {
                const piece = pieces[j];
                board.push(<PieceGame 
                    pieceGame={{
                        currentPlayer: piece.currentPlayer,
                        rid:i,
                        cid:j
                    }}
                    handlerPiece={this.onPieceClicked}/>) 
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