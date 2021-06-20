import React from 'react'

export type MovieType = {
    id:number;
    originalTitle:string;
    originalLanguage:string;
    popularity:number;
    title:string;
    overview:string;
    voteAverage:string;
    voteCount:string;
}

export interface IMovieProps{
    movie: MovieType
}

export class Movie extends React.Component<IMovieProps>{
    render(){
        const {movie} = this.props;
        return (
            <div>
                <h3>{movie.title}</h3>
                <span>Idioma: {movie.originalLanguage}</span>
                <p>{movie.overview}</p>
            </div>
        )
    }
}

export function MovieResultToMovieType(movieResult:any){
    console.log(movieResult);
    let movie:MovieType = {
        id: movieResult.id,
        originalTitle: movieResult.original_title,
        originalLanguage: movieResult.original_language,
        popularity: movieResult.popularity,
        title: movieResult.title,
        overview: movieResult.overview,
        voteAverage: movieResult.vote_average,
        voteCount: movieResult.vote_count
    }
    return movie;
}