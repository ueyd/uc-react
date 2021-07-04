import React from "react";
import { MovieResultToMovieType } from "./Movie/Movie";
import { MovieListType, MovieList } from "./Movie/MovieList";
// import {THE_MOVIE_DB} from '../util/Constantes'
import styled from "styled-components";
import { SVGetMovieList } from "../services/themoviedb/MovieService";

export type HomeType = {};

export interface IHomeProps {}

export interface IHomeState {
    moviesList: MovieListType[],
}

const urlMoviesList:any = [
    {
        url: "/movie/upcoming",
        title: "Up Coming"
    },
    {
        url: "/movie/top_rated",
        title: "Top Rated"
    },
    {
        url: "/movie/popular",
        title: "Popular"
    }
]

const WrapperMovieList = styled.div`

`

const Wrapper = styled.div`

`

export class Home extends React.Component<IHomeProps, IHomeState> {

    state = {
        moviesList:[]
    }

    // GetMovieList = async(url:string, title:string) => {
    //     // const moviesResult = await THE_MOVIE_DB
    //     //   .get(url)
    //     //   .then(({ data }) => data.results)
    //     //   .catch();
    //     // let movies = moviesResult.map((movie:any) => {
    //     //     return MovieResultToMovieType(movie);
    //     // });
    //     // let newList = {
    //     //     movieList:movies,
    //     //     titleList: title
    //     // }
    //     // return newList;
    // }

    async componentDidMount(){
        let moviesList:MovieListType[] = [];
        for (let index = 0; index < urlMoviesList.length; index++) {
            const {url, title} = urlMoviesList[index];
            let movieList = await SVGetMovieList(url, title);
            moviesList.push(movieList);
        }
        this.setState({moviesList});
    }

    render() {
        const { moviesList } = this.state;
        return (
        <Wrapper>
            {moviesList.map((movieList:MovieListType, idx:number) =>
                {
                    const key = movieList.titleList.replace(" ", "_") + "_" + idx.toString();
                    return <WrapperMovieList key={key} ><MovieList movieList={movieList} /></WrapperMovieList> ;
                }
            )}
        </Wrapper>
        );
    }
}


// export const Home:React.FC = () => {

//     //GetMovieList("/movie/upcoming")

//     const [movieLists, setMovieLists] = useState<MovieListType[]>([]);
//     const GetMovieList = async (url:string, title:string) => {
//         const moviesResult = await api
//           .get(url)
//           .then(({ data }) => data.results)
//           .catch();
//         let movies = moviesResult.map((movie:any) => {
//             return MovieResultToMovieType(movie);
//         });
//         let newList = {
//             movieList:movies,
//             titleList: title
//         }
//         return newList;
//     }

//     const Init = () =>{
//         GetMovieList("/movie/upcoming", "Up Coming").then(movieList => {
//             movieLists.push(movieList);
//             setMovieLists(movieLists);
//         });
//         GetMovieList("/movie/top_rated", "Top Rated").then(movieList => {
//             movieLists.push(movieList);
//             setMovieLists(());
//         });
//         GetMovieList("/movie/popular", "Popular").then(movieList => {
//             movieLists.push(movieList);
//             setMovieLists(movieLists);
//         });
//     }
//     //Hook para iniciar el componente
//     useEffect(()=>{
//         Init();
//     }, []);

//     return <div>
//         <button onClick={() => console.log(movieLists)}>Iniciar</button>
//         {movieLists.map((movieList:MovieListType, idx:number) => {
//             const key = movieList.titleList.replace(" ", "_") + "_" + idx.toString();
//             console.log(key);
//             return <MovieList key={key} movieList={movieList} />
//         })}
//     </div>
// }
