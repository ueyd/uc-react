import React from 'react';

export interface IBoilingVerdictProps {
    celsius:number
}

export const BoilingVerdict: React.FC<IBoilingVerdictProps> = ({celsius}) =>{
    return (
        <div>
            {celsius >= 100 ? (
                <p>The water would boil</p>
            ):(
                <p>The water would not boil</p>
            )}
        </div>   
    )
}