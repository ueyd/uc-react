
// import axios from "axios";
// import { MovieResultToMovieType } from "../../componentes/Movie/Movie";
import { THE_MOVIE_DB } from "../../util/Constantes";
import { GetBasicConfigAxios } from "./Index";

//needs api_key

//returns
/*
{
    success?: boolean;
    expires_at?:string;
    request_token?:string
}
*/
interface ResponseNewToken{
    success?: boolean;
    expires_at?:string;
    request_token?:string
}

//Consultar
//Step 1
//Auth user
const URL_REQ_TOKEN = '/authentication/token/new'
export const GetNewToken = async(apiKey:string = '') => {
    const params = GetBasicConfigAxios(apiKey);
    // console.log(params);
    if(params) {
    //     const token = await THE_MOVIE_DB
    //         .get(URL_REQ_TOKEN, {params})
    //         .then(({ data }) => data.request_token)
    //         .catch();
    //     console.log(token);
        
        //Step2
        //CORS policy: Response to preflight request 
        // let res2 = await AuthUser(token);
        // console.log(res2);
        //step3
        // let res3 = await GetNewSession('b22a4d77c07f1483a52e760272a1287c15c2eda2');
        // console.log(res3);
        return '459a127525ba1c47f99c356b1f9a09b93fc62e5c';
        // let movies = moviesResult.map((movie:any) => {
        //     return MovieResultToMovieType(movie);
        // });
        // let newList = {
        //     movieList:movies,
        //     titleList: title
        // }
        //return newList;

        //our session id: '459a127525ba1c47f99c356b1f9a09b93fc62e5c'
    }
    return '';
}

//Step 2
const URL_AUTH = 'https://www.themoviedb.org/authenticate/{token}';

const AuthUser = async(token:string) => {
    const params = GetBasicConfigAxios();
    //params.params.newField = '';
    if(params)
    {
        const response = await THE_MOVIE_DB
            .get(URL_AUTH.replace('{token}', token))
            .then(({ data }) => data)
            .catch();
        return response;
    }
    return '';
}

const URL_NEW_SESSION = '/authentication/session/new';

export const GetNewSession = async(request_token:string = '') => {
    return '459a127525ba1c47f99c356b1f9a09b93fc62e5c'
    const params = GetBasicConfigAxios();
    // console.log(params);
    if(params)
    {
        // let parameters = {
        //     params: {
        //         api_key: params.params.api_key,
        //         request_token: requestToken
        //     }
        // }
        const response = await THE_MOVIE_DB
            .post(URL_NEW_SESSION, {request_token}, {params})
            .then(({ data }) => data)
            .catch();
        return response.session_id;
        // let movies = moviesResult.map((movie:any) => {
        //     return MovieResultToMovieType(movie);
        // });
        // let newList = {
        //     movieList:movies,
        //     titleList: title
        // }
        //return newList;
    }
    return '';
}