import React from 'react'
import { Typography} from '@material-ui/core'
import { Player } from './Game';
import { NO_PLAYER } from './Constantes';

type BarGameProps = {
    bgColor:string,
    currentPlayer:Player,
    winner:Player
}

export class BarGame extends React.Component<BarGameProps, {}>{
    
    render(){
        const {currentPlayer, winner} = this.props;
        return (
            <div className="barGame">
                <div>
                    <Typography align="center" variant="subtitle2" 
                    className={currentPlayer.icon !== NO_PLAYER.icon && winner.icon === NO_PLAYER.icon
                        ?  ((currentPlayer.icon === 'X' ? "pone" : "ptwo")) : '' }>
                    Current Player: {winner.icon === NO_PLAYER.icon ? currentPlayer.icon : NO_PLAYER.icon}
                    </Typography>
                </div>
                <div>
                    <Typography align="center" variant="subtitle2" 
                        className={winner.icon !== NO_PLAYER.icon ? ((winner.icon==='X' ? "pone" : "ptwo")) : '' }>
                        Winner: {winner.icon}
                    </Typography>
                </div>
            </div>
        )
    }
}