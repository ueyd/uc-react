import React, {useState} from "react";
// import { MovieResultToMovieType } from "./Movie/Movie";
import { MovieListType, MovieList } from "./Movie/MovieList";
// import {THE_MOVIE_DB} from '../util/Constantes'
import styled from "styled-components";
import { SVGetMovieList } from "../services/themoviedb/MovieService";
// import {RouteComponentProps} from 'react-router';
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
export type HomeType = {};

export interface IHomeProps {}

export interface IHomeState {
    moviesList: MovieListType[],
}

const urlMoviesList:any = [
    {
        url: "/movie/upcoming",
        title: "Up Coming"
    },
    {
        url: "/movie/top_rated",
        title: "Top Rated"
    },
    {
        url: "/movie/popular",
        title: "Popular"
    }
]

const WrapperMovieList = styled.div`

`

const Wrapper = styled.div`

`

export const Home:React.FC<IHomeProps> = (props) => {
    const history = useHistory();
    const [moviesList, setMoviesList] = useState<MovieListType[]>([]);

    useEffect(() => {
        let moviesList:MovieListType[] = [];
        const InitLists = async() => {
            for (let index = 0; index < urlMoviesList.length; index++) {
                const {url, title} = urlMoviesList[index];
                let movieList = await SVGetMovieList(url, title);
                moviesList.push(movieList);
            }
            setMoviesList(moviesList);
        }
        InitLists();
    } , []);    

    return <Wrapper>
        {moviesList.map((movieList:MovieListType, idx:number) =>
            {
                const key = movieList.titleList.replace(" ", "_") + "_" + idx.toString();
                return <WrapperMovieList key={key} ><MovieList movieList={movieList} /></WrapperMovieList> ;
            }
        )}
    </Wrapper>
}
