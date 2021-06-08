import { Button } from '@material-ui/core';
import React from 'react'
import { BG_COLOR_BASE, NO_PLAYER } from './Constantes';
import { Player } from './Game';

export type PieceGameType = {
    owner:Player,
    rid?:number,
    cid?:number
}

export interface PieceGameProps {
    pieceGame:PieceGameType,
    currentPlayer:Player,
    handlerPiece?(rid?:number, cid?:number):void
}

interface PieceGameState{
    hoverPlayer:string;
    style:PieceGameStyle
}

interface PieceGameStyle{
    backgroundColor:string
}

export class PieceGame extends React.Component<PieceGameProps, PieceGameState>{

    
    GetInitialState() {
        return {
            hoverPlayer:'',
            style:{
                backgroundColor: BG_COLOR_BASE,
            }
        }
    };

    constructor(props:PieceGameProps){
        super(props);
        this.state = this.GetInitialState(); 
    }

    handlerPiece(){
        const {rid, cid} = this.props.pieceGame;
        const {handlerPiece} = this.props;
        if(handlerPiece !== undefined){
            const {currentPlayer} = this.props;
            const backgroundColor = currentPlayer.bgColor;//currentPlayer === '' ? bgColorNew : (currentPlayer === 'X' ? bgColorX : bgColorY)
            this.setState({style: {
                backgroundColor: backgroundColor
            }});
            handlerPiece(rid, cid);
        }
    }

    onMouseEventCapture = (e:React.MouseEvent): void => {
        if(e.type === 'mouseenter' && this.props.pieceGame.owner.icon === NO_PLAYER.icon){
            const {currentPlayer} = this.props;
            const backgroundColor = currentPlayer.bgColor;//currentPlayer === '' ? bgColorNew : (currentPlayer === 'X' ? bgColorX : bgColorY)
            this.setState({style: {
                backgroundColor: backgroundColor
            }});
        }
        else if(e.type === 'mouseleave' && this.props.pieceGame.owner.icon === NO_PLAYER.icon){
            this.setState({style: {
                backgroundColor: BG_COLOR_BASE
            }});
        }
    }
    
    render(){
        const {owner} = this.props.pieceGame;
        
        return (
            <Button 
            className={"pieceGame"}//{owner.icon === '' ? 'pieceGame' : (owner.icon==='X' ? 'pieceGame pone' : 'pieceGame ptwo')}
            variant="contained"
            onClick={() => this.handlerPiece()}
            onMouseEnter={this.onMouseEventCapture}
            onMouseLeave={this.onMouseEventCapture}
            style={this.state.style}
            >
                {owner.icon}
            </Button>
        )
    }
}