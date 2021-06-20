import React from "react";
import { MovieType, MovieResultToMovieType } from "./Movie";
import { MovieList } from "./MovieList";

import axios from "axios";

export type HomeType = {};

export interface IHomeProps {}

export interface IHomeState {
  currentMovieList: MovieType[];
  titleList:string;
}

const api = axios.create({
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTRiM2Y0MmU4ZjJhYTAwNTFiOTEyZDQzMDU3NzFjNSIsInN1YiI6IjYwYjk2NjQ0Y2QyZjBmMDA1OWY4M2U2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2OVCbJhE0LVpD8xODPylkC0PLHQUGQBL7_40T69vg8w",
  },
  baseURL: "https://api.themoviedb.org/3",
});

export class Home extends React.Component<IHomeProps, IHomeState> {

    GetUpComingMovies = async () => {
        const url = "/movie/upcoming";
        const moviesResult = await api
          .get(url)
          .then(({ data }) => data.results)
          .catch();
        let movies = moviesResult.map((movie:any) => {
            return MovieResultToMovieType(movie);
        });
        this.setState({
            currentMovieList:movies,
            titleList: url
        });
    }

    GetTopRatedMovies = async () => {
        const url = "/movie/top_rated";
        const moviesResult = await api
          .get(url)
          .then(({ data }) => data.results)
          .catch();
        let movies = moviesResult.map((movie:any) => {
            return MovieResultToMovieType(movie);
        });
        this.setState({
            currentMovieList:movies,
            titleList: url
        });
    }

    GetPopularMovies = async () => {
        const url = "/movie/popular";
        const moviesResult = await api
          .get(url)
          .then(({ data }) => data.results)
          .catch();
        let movies = moviesResult.map((movie:any) => {
            return MovieResultToMovieType(movie);
        });
        this.setState({
            currentMovieList:movies,
            titleList: url
        });
    }

    state = {
        currentMovieList:[],
        titleList: ""
    }

    render() {
        const { currentMovieList, titleList } = this.state;
        return (
        <div>
            <button onClick={() => this.GetUpComingMovies()}>Up Coming Movies</button>
            <button onClick={() => this.GetTopRatedMovies()}>Top Rated Movies</button>
            <button onClick={() => this.GetPopularMovies()}>Popular Movies</button>
            <MovieList movieList={currentMovieList} titleList={titleList}/>
        </div>
        );
    }
}
