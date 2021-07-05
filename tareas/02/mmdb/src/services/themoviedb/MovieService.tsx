import { MovieResultToMovieType } from "../../componentes/Movie/Movie";
import { THE_MOVIE_DB } from "../../util/Constantes";
import { ValidateLocalStorage } from "../../util/Utilitario";
import { GetBasicConfigAxios } from "./Index";

//URLS
const urlPostRateMovie = "/movie/{idMovie}/rating";

//Consultas
export const SVGetMovieList = async(url:string, title:string) => {
    let params = GetBasicConfigAxios();
    const moviesResult = await THE_MOVIE_DB
        .get(url, {params})
        .then(({ data }) => data.results)
        .catch();
    let movies = moviesResult.map((movie:any) => {
        //consultar account_states
        // const movieAccResult = await SVGetAccState(movie.id)
        //     .then(data => data)
        //     .catch();

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

export const SVGetAccState = async(id:string) => {
    //Data del user en caso de que tenga session_id
    let urlAcc = urlGetMovieIdAcc.replace("{id}", id);
    let params = GetBasicConfigAxios();
    //Esta 
    let params2 = {
        api_key: params.params.api_key,
        session_id: localStorage.getItem("session_id")
    } 

    const moviesAccResult = await THE_MOVIE_DB.get(urlAcc, {params:params2})
        .then(({ data }) => data)
        .catch();

    return moviesAccResult;
}

const urlGetMovieDetails = "/movie/{id}";
export const SVGetMovieDetails = async(id:string) => {
    let params = GetBasicConfigAxios();
    let url = urlGetMovieDetails.replace("{id}", id);

    const moviesResult = await THE_MOVIE_DB.get(url, {params})
        .then(({ data }) => data)
        .catch();
    const moviesAccResult = await SVGetAccState(id);
    // let urlAcc = urlGetMovieIdAcc.replace("{id}", id);
    // //Esta 
    // let params2 = {
    //     api_key: params.params.api_key,
    //     session_id: localStorage.getItem("session_id")
    // } 
    // //Data del user en caso de que tenga session_id
    // const moviesAccResult = await THE_MOVIE_DB.get(urlAcc, {params:params2})
    //     .then(({ data }) => data)
    //     .catch();
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

interface RequestBodyFavorite {
    media_type: string;
    media_id: number;
    favorite: boolean;
}

const urlFavorite = '/account/{account_id}/favorite';
export const SVAsFavorite = async(idMovie:number, favorite:boolean) => {
    if(ValidateLocalStorage('acc_id')){
        const accId = localStorage.getItem('acc_id')??'';
        let configAxios = GetBasicConfigAxios();
        let params = {
            api_key: configAxios.params.api_key,
            session_id: localStorage.getItem("session_id")
        };
        let req = {
            media_type: 'movie',
            media_id: idMovie,
            favorite
        }
        let url = urlFavorite.replace('{account_id}', accId);
        await THE_MOVIE_DB.post(url, req, {params});
    }
}

const urlWatchlist = '/account/{account_id}/watchlist';
export const SVWatchlist = async(idMovie:number, watchlist:boolean) => {
    if(ValidateLocalStorage('acc_id')){
        const accId = localStorage.getItem('acc_id')??'';
        let configAxios = GetBasicConfigAxios();
        let params = {
            api_key: configAxios.params.api_key,
            session_id: localStorage.getItem("session_id")
        };
        let req = {
            media_type: 'movie',
            media_id: idMovie,
            watchlist
        }
        let url = urlWatchlist.replace('{account_id}', accId);
        const result = await THE_MOVIE_DB.post(url, req, {params});
        console.log(result);
    }
}