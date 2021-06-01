import React from 'react'
import {AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core'

type BarGameProps = {
    bgColor:string,
    currentPlayer:string,
    winner:string
}

export class BarGame extends React.Component<BarGameProps, {}>{
    constructor(props:BarGameProps) {
        super(props);
    }

    getClases(){
        const barGameCss = " barGame";
        const poneCss = " pone";
        const ptwoCss = " ptwo";

        const {winner, currentPlayer} = this.props;

        let css = "";
        css += barGameCss;
        css += (winner !== "" ? (winner==="X" ? poneCss : ptwoCss) : (currentPlayer==='X' ? poneCss : ptwoCss))

        return css;
        //this.props.currentPlayer==='' ? 'barGame' : (this.props.currentPlayer==='X' ? 'barGame pone' : 'barGame ptwo')
    }

    render(){
        const {currentPlayer, winner} = this.props;
        return (
            <div className="barGame">
                <div>
                    <Typography align="center" variant="subtitle2" className={currentPlayer !== '' ? ((currentPlayer==='X' ? "pone" : "ptwo")) : '' }>
                    Current Player: {currentPlayer}
                    </Typography>
                </div>
                <div>
                    <Typography align="center" variant="subtitle2" className={winner !== '' ? ((winner==='X' ? "pone" : "ptwo")) : '' }>
                        Winner: {winner}
                    </Typography>
                </div>
            </div>
        )
    }
}