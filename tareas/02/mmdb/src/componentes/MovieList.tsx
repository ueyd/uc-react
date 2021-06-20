import React from 'react'
import {Movie, MovieType} from './Movie'

export interface IMovieListProps{
    movieList:MovieType[],
    titleList:string;
}

export class MovieList extends React.Component<IMovieListProps>{
    render(){
        const {movieList,titleList} = this.props;
        return (
            <div>
                <h3>{titleList}</h3>
                {movieList.map(movie => 
                    <Movie key={movie.id} movie={movie}/>
                )}
            </div>
        )
    }
}