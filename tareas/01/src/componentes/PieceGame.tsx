import { Button } from '@material-ui/core';
import React from 'react'

export type PieceGameProps = {
    currentPlayer:string,
    rid?:number, 
    cid?:number,
    handlerPiece?(rid?:number, cid?:number):void
}

interface PieceGameState {
    currentPlayer:string
}

export class PieceGame extends React.Component<PieceGameProps, PieceGameState>{
    
    constructor(props:PieceGameProps) {
        super(props);
    }

    state = {
        currentPlayer: ''
    }

    console(){
        console.log(this.props);
    }

    handlerPiece(){
        this.setState((state, props)=>{
            if(state.currentPlayer === '')
            {
                if(this.props.handlerPiece != undefined){
                    this.props.handlerPiece(this.props.rid, this.props.cid);
                    return { currentPlayer: props.currentPlayer };
                }
                return { currentPlayer: state.currentPlayer };
            }
        });
    }

    render(){
        return (
            <Button className={this.state.currentPlayer === '' ? 'pieceGame' : (this.state.currentPlayer==='X' ? 'pieceGame pone' : 'pieceGame ptwo')}
                variant="contained"
                onClick={() => this.handlerPiece()}
            >
                {this.state.currentPlayer}
            </Button>
        )
    }
}