import { Button } from '@material-ui/core';
import React from 'react'

export type PieceGameType = {
    currentPlayer:string,
    rid?:number,
    cid?:number
}

export interface PieceGameProps {
    pieceGame:PieceGameType,
    handlerPiece?(rid?:number, cid?:number):void
}


export class PieceGame extends React.Component<PieceGameProps, {}>{
    
    constructor(props:PieceGameProps) {
        super(props);
    }

    handlerPiece(){
        this.setState((_, props) => {
            const {rid, cid} = props.pieceGame;
            const {handlerPiece} = props;
            if(handlerPiece != undefined){
                handlerPiece(rid, cid);
            }
        });
    }

    render(){
        const {currentPlayer} = this.props.pieceGame;
        return (
            <Button onMouseEnter={} className={currentPlayer === '' ? 'pieceGame' : (currentPlayer==='X' ? 'pieceGame pone' : 'pieceGame ptwo')}
                variant="contained"
                onClick={() => this.handlerPiece()}
            >
                {currentPlayer}
            </Button>
        )
    }
}