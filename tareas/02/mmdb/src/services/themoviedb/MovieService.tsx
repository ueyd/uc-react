import { MovieResultToMovieType } from "../../componentes/Movie/Movie";
import { THE_MOVIE_DB } from "../../util/Constantes";
import { GetBasicConfigAxios } from "./Index";

//URLS
const urlGetMovieDetails = "/movie/{id}";
const urlPostRateMovie = "/movie/{idMovie}/rating";

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

//Url require an session_id
const urlGetMovieIdAcc = '/movie/{id}/account_states';
export const SVGetMovieDetails = async(id:string) => {
    let params = GetBasicConfigAxios();
    let url = urlGetMovieDetails.replace("{id}", id);
    let urlAcc = urlGetMovieIdAcc.replace("{id}", id);
    const moviesResult = await THE_MOVIE_DB.get(url, {params})
        .then(({ data }) => data)
        .catch();
    //Esta 
    let params2 = {
        api_key: params.params.api_key,
        session_id: localStorage.getItem("session_id")
    } 
    //Data del user en caso de que tenga session_id
    const moviesAccResult = await THE_MOVIE_DB.get(urlAcc, {params:params2})
        .then(({ data }) => data)
        .catch();
    return MovieResultToMovieType(moviesResult, moviesAccResult);
}

export const SVRateMovie = async(idMovie:number, value:number) => {
    let url = urlPostRateMovie.replace('{idMovie}', idMovie.toString());
    let configAxios = GetBasicConfigAxios();
    let params = {
        api_key: configAxios.params.api_key,
        session_id: localStorage.getItem("session_id")
    };
    const result = await THE_MOVIE_DB.post(url, {value}, {params});
    return result;
}