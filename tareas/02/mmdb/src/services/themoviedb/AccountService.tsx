
import { THE_MOVIE_DB } from "../../util/Constantes";
import { GetBasicConfigAxios } from "./Index";

const urlAccountDetails = '/account';
export const SVAccountDetails = async(session_id:string) => {
    let configAxios = GetBasicConfigAxios();
    let params = {
        api_key: configAxios.params.api_key,
        session_id: session_id
    };
    console.log(params);
    const result = await THE_MOVIE_DB.get(urlAccountDetails, {params})
        .then(({ data }) => data)
        .catch();;
    console.log(result);
    return result;
}