import axios from "axios";
import { config } from "process";
import { MovieResultToMovieType } from "../../componentes/Movie/Movie";
import { THE_MOVIE_DB } from "../../util/Constantes";
import { GetBasicConfigAxios } from "./Index";
// import { API_KEY } from "../../util/Constantes";
//URLS
const urlGetMovieDetails = "/movie/{id}";
const urlPostRateMovie = "/movie/{idMovie}/rating";

// const params = {
//     params:{
//         api_key: API_KEY,
//     }
// }
//Consultas
export const SVGetMovieList = async(url:string, title:string) => {
    let params = GetBasicConfigAxios();
    const moviesResult = await THE_MOVIE_DB
        .get(url, {params})
        .then(({ data }) => data.results)
        .catch();
    let movies = moviesResult.map((movie:any) => {
        return MovieResultToMovieType(movie);
    });
    let newList = {
        movieList:movies,
        titleList: title
    }
    return newList;
}

export const SVGetMovieDetails = async(id:string) => {
    let params = GetBasicConfigAxios();
    let url = urlGetMovieDetails.replace("{id}", id);
    const moviesResult = await THE_MOVIE_DB.get(url, {params})
        .then(({ data }) => data)
        .catch();
    console.log(moviesResult);
    return MovieResultToMovieType(moviesResult);
}

export const SVRateMovie = async(idMovie:number, value:number) => {
    let url = urlPostRateMovie.replace('{idMovie}', idMovie.toString());
    let configAxios = GetBasicConfigAxios();
    console.log(configAxios);
    let params = {
        api_key: configAxios.params.api_key,
        session_id: '459a127525ba1c47f99c356b1f9a09b93fc62e5c'
    };
    const result = await THE_MOVIE_DB.post(url, {value}, {params});
    console.log(result);
}