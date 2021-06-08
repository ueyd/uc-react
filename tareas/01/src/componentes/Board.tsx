
import React from 'react'
import {GameState, Player} from './Game'
import { PieceGame, PieceGameType } from './PieceGame';

export type BoardType = {
    currentPlayer:Player,
    winner:Player
}

export interface BoardProps extends GameState{
    onPieceClicked(rid?:number, cid?:number):void;
}

export class Board extends React.Component<BoardProps, {}>{

    renderRow(piecesGame:PieceGameType[], idr:number){
        const {currentPlayer} = this.props.game.board;
        const {onPieceClicked} = this.props;
        return (
            <div className="row-pieces" key={idr}>
                {piecesGame.map((pieceGame, index) => <PieceGame 
                        key={index}
                        pieceGame={{
                            owner: pieceGame.owner,
                            rid:idr,
                            cid:index
                        }}
                        handlerPiece={onPieceClicked}
                        currentPlayer={currentPlayer}
                />)}
            </div>
        )
    }

    render(){
        const {boardPieces} = this.props.game;

        return (
            <div className="boardGame">
                {boardPieces.map((piecesGame, index) => this.renderRow(piecesGame, index))}
            </div>
        )
    }
}