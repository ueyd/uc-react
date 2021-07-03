import React from 'react'
import styled from 'styled-components'
import { CREATE_SESSION, THE_MOVIE_DB } from "../../util/Constantes";

interface MovieRatingProps{
    idMovie?:number
}

const Wrapper = styled.div`

`
const urlPostTokenRatingMovie = '/authentication/token/new';
const urlAuth = '/authenticate/{token}'
const urlPostRatingMovie = "/movie/{movie_id}/rating?api_key=7a4b3f42e8f2aa0051b912d4305771c5&session_id={session_id}}";
export const MovieRating:React.FC<MovieRatingProps> = (props) => {

    const minRate = 1;
    const rates = [1,2,3,4,5,6,7,8,9,10];
    //Evento generado por el botón
    const DoRating = async(rate:number) => {
        const payload = {
            value: rate
        }
        if(props.idMovie != undefined)
        {
            let token = await THE_MOVIE_DB.get(urlPostTokenRatingMovie, {
                params: {
                    api_key: '7a4b3f42e8f2aa0051b912d4305771c5'
                }
            });
            let session = await CREATE_SESSION(token.data.request_token);
            let urlPostRatingMovieGen = urlPostRatingMovie.replace("{movie_id}", props.idMovie.toString());
            urlPostRatingMovieGen = urlPostRatingMovieGen.replace("{session_id}", token.data.request_token);
            //let res = await THE_MOVIE_DB.post(urlPostRatingMovieGen, payload);   
        }
    }
    return (
        <Wrapper>
            {rates.map((rate, idx) => {
                <button key={idx} onClick={() => DoRating(rate)}>{rate}</button>
            })}
        </Wrapper>
    )
}