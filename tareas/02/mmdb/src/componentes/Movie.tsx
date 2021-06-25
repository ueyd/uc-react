import React from 'react'
import styled from 'styled-components'

export type MovieType = {
    id:number;
    originalTitle:string;
    originalLanguage:string;
    popularity:number;
    title:string;
    overview:string;
    voteAverage:string;
    voteCount:string;
    posterPath:string;
}

export interface IMovieProps{
    movie: MovieType
}

const Wrapper = styled.div<{urlBackgroung:string}>`
    /* width: 200px;
    height: 200px; */
    /* width: 500px; */
    /* display: inline-flex; */
    /*height: 200px; */
    /* width: 200px;
    height: 100%;
    margin: 5px;
    background-image: url("${props => props.urlBackgroung}");
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s; */
    position: relative;
    width: 200px;
    height: 300px;
    margin: 10px;
    display: inline-block;
`

const Image = styled.img`
    display: block;
    border-radius: 2px 2px 0 0;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
`

const WrapperTools = styled.span`
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 20px);
    padding: 10px;
    height: 40px;
    background: #41414187;
    font-family: 'Raleway', cursive;
    border-radius: 0 0 3px 3px;
`


const Title = styled.span`
    /* color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 20px);
    padding: 10px;
    height: 40px;
    background: #41414187;
    font-family: 'Raleway', cursive;
    border-radius: 0 0 10px 10px; */
`

export class Movie extends React.Component<IMovieProps>{
    render(){
        const {movie} = this.props;
        const urlImage = `https://image.tmdb.org/t/p/w300/${movie.posterPath}`
        return (
            <Wrapper urlBackgroung={urlImage}>
                <Image src={urlImage}/>
                <WrapperTools>
                    <Title>{movie.title}</Title>
                </WrapperTools>
                {/* <h3>{movie.title}</h3>
                <span>Idioma: {movie.originalLanguage}</span>
                <p>{movie.posterPath}</p> */}
                {/* <img
                    className="ui centered small image"
                    alt={movie.title}
                    src={urlImage} /> */}
                {/* <p>{movie.overview}</p> */}
            </Wrapper>
        )
    }
}

export function MovieResultToMovieType(movieResult:any){
    let movie:MovieType = {
        id: movieResult.id,
        originalTitle: movieResult.original_title,
        originalLanguage: movieResult.original_language,
        popularity: movieResult.popularity,
        title: movieResult.title,
        overview: movieResult.overview,
        voteAverage: movieResult.vote_average,
        voteCount: movieResult.vote_count,
        posterPath: movieResult.poster_path
    }
    return movie;
}