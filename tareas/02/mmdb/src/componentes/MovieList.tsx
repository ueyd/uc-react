import React from 'react'
import {Movie, MovieType} from './Movie'
import styled from 'styled-components'

export type MovieListType = {
    movieList:MovieType[],
    titleList:string;
}

export interface IMovieListProps{
    movieList:MovieListType,
}
const WrapperMovie = styled.div`

`

const Movies = styled.div`
    display: flex;
    /* display: flex; */
    padding: 0;
    height: 380px;
    overflow: hidden;
    margin-bottom: 10px;
    /* position: relative; */
    flex-flow: column wrap;
    width: calc(100vw - 20px);
    overflow-x: auto;
`

const Title = styled.h4`
    font-size: 2rem;
    padding: 10px;
`

export class MovieList extends React.Component<IMovieListProps>{
    render(){
        const {movieList, titleList} = this.props.movieList;
        return (
            <WrapperMovie>
                <Title>{titleList}</Title>
                <Movies>
                    {movieList.map(movie => 
                        <Movie key={movie.id} movie={movie}/>
                    )}
                </Movies>
            </WrapperMovie>
        )
    }
}