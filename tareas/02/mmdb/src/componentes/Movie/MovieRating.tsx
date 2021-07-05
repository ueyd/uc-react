import React from 'react'
import styled from 'styled-components'
import { SVRateMovie } from '../../services/themoviedb/MovieService';
// import {GetNewToken} from '../../services/themoviedb/AuthService'
// import { useEffect } from 'react';
// import { useState } from 'react';


const Wrapper = styled.div`

`

const BtnRate = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background-color: #f6a106;
    font-weight: 700;
    font-size: 12px;
    margin: 1px;
    cursor: pointer;
    
`

interface MovieRatingProps{
    idMovie?:number,
    currentValue?:number,
    handleRate:(value:number) => void
}

export const MovieRating:React.FC<MovieRatingProps> = (props) => {

    //const minRate = 1;
    let rates = [];
    for (let index = 0; index < 10; index++) rates.push(index + 1);
    const {handleRate, currentValue} = props;
    //console.log(props.currentValue);
    // //const {currentValue} = props;
    //  const [currentValue, setCurrentValue] = useState<number>();
    // useEffect(() => {
    //     console.log(props.currentValue);
    //     //setCurrentValue(props.currentValue);
    // }, []);
    //Evento generado por el botón
    const DoRating = async(rate:number) => {
        const rated = async() => {
            if(props.idMovie !== undefined) {
                await SVRateMovie(props.idMovie, rate);
                handleRate(rate);
            }
        };
        rated();
    }
    return (
        <Wrapper>
            <h6>Rate</h6>
            {rates.map((rate, idx) => {
                //if()
                return <BtnRate key={idx} className={currentValue === rate ? 'current' : ''} onClick={() => DoRating(rate)}>{rate.toString()}</BtnRate>
            })}
        </Wrapper>
    )
}
