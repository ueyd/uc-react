
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
// interface ResponseNewToken{
//     success?: boolean;
//     expires_at?:string;
//     request_token?:string
// }

//Consultar
//Step 1
//Auth user
const URL_REQ_TOKEN = '/authentication/token/new'
export const GetNewToken = async(apiKey:string = '') => {
    const params = GetBasicConfigAxios(apiKey);
    if(params) {
        const token = await THE_MOVIE_DB
            .get(URL_REQ_TOKEN, {params})
            .then(({ data }) => data.request_token)
            .catch();
        return token;
    }
    return '';
}

const URL_NEW_SESSION = '/authentication/session/new';

export const GetNewSession = async(request_token:string = '') => {
    const params = GetBasicConfigAxios();
    if(params)
    {
        const response = await THE_MOVIE_DB
            .post(URL_NEW_SESSION, {request_token}, {params})
            .then(({ data }) => data)
            .catch();
        return response.session_id;
    }
    return '';
}