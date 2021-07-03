export const GetUrlImg = (posterPath?:string) => {
    return posterPath ? `https://image.tmdb.org/t/p/w300/${posterPath}` : "";
}