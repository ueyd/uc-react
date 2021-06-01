import React from 'react'
import { Board, BoardProps } from './Board';
import {BarGame} from './BarGame'
import { PieceGame } from './PieceGame';

type GameState = {
    currentPlayer:string,
    winner:string
}

export class Game extends React.Component<{}, GameState>{

    state:GameState = {
        currentPlayer: "X",
        winner: ''
    }

    constructor(props: {}){
        super(props);
        this.turnPlayer = this.turnPlayer.bind(this);
    }

    turnPlayer(newCurrentPlayer:string, winner:string){
        this.setState({
            currentPlayer: newCurrentPlayer,
            winner: winner
        });
    }

    render(){
        return (
            <div className="game">
                <BarGame 
                    currentPlayer={this.state.currentPlayer} 
                    winner={this.state.winner} 
                    bgColor="red"/>
                <Board 
                    turnPlayer={this.turnPlayer} 
                    currentPlayer={this.state.currentPlayer}
                    winner={this.state.winner}
                />
            </div>
        )
    }
}