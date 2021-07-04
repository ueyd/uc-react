export const API_KEY = '7a4b3f42e8f2aa0051b912d4305771c5';
export const GetBasicConfigAxios = (apiKey:string = '') => {
    let configAxios = {
      params:{
          api_key: API_KEY,
      }
    }
    if(apiKey !== '') configAxios.params.api_key = apiKey;
    return configAxios;
}