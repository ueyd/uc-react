export const GetUrlImg = (posterPath?:string) => {
    return posterPath ? `https://image.tmdb.org/t/p/w300/${posterPath}` : "";
}

export const ValidateLocalStorage = (key:string) => {
    return (localStorage.getItem(key) !== null && localStorage.getItem(key) !== undefined);
}