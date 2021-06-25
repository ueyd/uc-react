import React from "react";
import { MovieResultToMovieType } from "./Movie";
import { MovieListType, MovieList } from "./MovieList";
import axios from "axios";

export type HomeType = {};

export interface IHomeProps {}

export interface IHomeState {
    moviesList: MovieListType[],
}

const api = axios.create({
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTRiM2Y0MmU4ZjJhYTAwNTFiOTEyZDQzMDU3NzFjNSIsInN1YiI6IjYwYjk2NjQ0Y2QyZjBmMDA1OWY4M2U2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2OVCbJhE0LVpD8xODPylkC0PLHQUGQBL7_40T69vg8w",
  },
  baseURL: "https://api.themoviedb.org/3",
});

export class Home extends React.Component<IHomeProps, IHomeState> {

    state = {
        moviesList:[]
    }

    GetMovieList = async(url:string, title:string) => {
        const moviesResult = await api
          .get(url)
          .then(({ data }) => data.results)
          .catch();
        let movies = moviesResult.map((movie:any) => {
            return MovieResultToMovieType(movie);
        });
        let newList = {
            movieList:movies,
            titleList: title
        }
        this.setState((state, _) => {
            let { moviesList } = state;
            moviesList.push(newList);
            return {moviesList};
        });
    }

    // constructor(props:IHomeProps){
    //     super(props);
        
    //     // this.GetMovieList("/movie/top_rated");
    //     // this.GetMovieList("/movie/popular");
    // }

    componentDidMount(){
        this.GetMovieList("/movie/upcoming", "Up Coming");
    }

    render() {
        const { moviesList } = this.state;
        return (
        <div>
            {moviesList.map((movieList:MovieListType, idx:number) =>
                {
                    const key = movieList.titleList.replace(" ", "_") + "_" + idx.toString();
                    return <MovieList key={key} movieList={movieList} />;
                }
            )}
        </div>
        );
    }
}

// export const Home:React.FC = () => {
    
//     //GetMovieList("/movie/upcoming")

//     const [movieLists, setMovieLists] = useState<MovieListType[]>([]);
//     const GetMovieList = async (url:string) => {
//         const moviesResult = await api
//           .get(url)
//           .then(({ data }) => data.results)
//           .catch();
//         let movies = moviesResult.map((movie:any) => {
//             return MovieResultToMovieType(movie);
//         });
//         let newList = {
//             movieList:movies,
//             titleList: url
//         }
//         return newList;
//     }
//     //Hook para iniciar el componente
//     useEffect(()=>{
//         GetMovieList("/movie/upcoming").then(movieList => {
//             movieLists.push(movieList);
//             setMovieLists(movieLists);
//         });
//         GetMovieList("/movie/top_rated").then(movieList => {
//             movieLists.push(movieList);
//             setMovieLists(movieLists);
//         });
//         GetMovieList("/movie/popular").then(movieList => {
//             movieLists.push(movieList);
//             setMovieLists(movieLists);
//         });
//         console.log(movieLists);
//     }, []);

//     return <div>
//         {movieLists.map((movieList:MovieListType) =>
//             <MovieList movieList={movieList} />
//         )}
//     </div>
// }
