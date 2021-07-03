import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { THE_MOVIE_DB } from "../../util/Constantes";
import { GetUrlImg } from "../../util/Utilitario";
import { MovieResultToMovieType, MovieType } from "./Movie";
import styled from "styled-components";


import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { MovieRating } from "./MovieRating";
// const Modal = styled.div`
//   /* position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1050;
//   display: none;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   outline: 0; */
//   position: "absolute";
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background: "rgba(0, 0, 0, 0.15)";
// `

const WrapperMovieDetails = styled.div`
  position: relative;
  max-width: 800px;
  width: 40%;
  padding: 2rem;
  background-color: #323233;
  color: #ebebeb;
  /* padding-top: 5vh;
  margin-bottom: 5vh; */
  /* min-height: 800px; */
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 4px;
`
const BtnCerrar = styled.button`
  position: relative;
  left: 0;
  top: 0;
  float: right;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 10px;
  color: #f7f7f7;
  font-size: 14px;
  background-color: #676767;
  font-weight: 600;
`

const OverView = styled.div`
  width: 60%;
  text-align: justify;
  display: inline-block;
`

const Info = styled.div`
  width: 40%;
  display: inline-block;
  margin-left: 10px;
  *{
    margin-bottom: 0.5rem;
  }
`

const BodyDetails = styled.div`
  display: flex;
  div{
    margin-top: 10px;
  }
`
const DivImg = styled.div`
  text-align: center;
`
const MovieDetailsModal = (back:any, movie?:MovieType) => {
    const urlImage = GetUrlImg(movie?.posterPath);
    
    return (
    <>
      <Modal
        open={true}
        // open={open}
        // onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
          <Fade in={true}>
            <WrapperMovieDetails>
                <BtnCerrar onClick={back}>X</BtnCerrar>
                <p>{movie?.originalTitle}</p>
                <DivImg>
                  <img src={urlImage} />
                </DivImg>
                <BodyDetails>
                  <OverView>
                    <p>{movie?.overview}</p>
                  </OverView>
                  <Info>
                    <h5>Información</h5>
                    <p>Puntuación: {movie?.voteAverage}</p>
                    <p>originalTitle: {movie?.originalTitle}</p>
                    <p>originalLanguage: {movie?.originalLanguage}</p>
                    <MovieRating idMovie={movie?.id}/>
                  </Info>
                </BodyDetails>
                {/* Componente de puntuacion */}
            </WrapperMovieDetails>
          </Fade>
      </Modal>
    </>
  );
};

// const MovieDetailsBody = (movie?: MovieType) => {
//   //const {title, originalLanguage, overview, voteCount, posterPath, popularity} = movie;
//   const urlImage = GetUrlImg(movie?.posterPath);
//   return (
//     <>
//       <div>
//         <p>{movie?.id}</p>
//         <p>{movie?.originalTitle}</p>
//         <p>{movie?.overview}</p>
//         <p>{movie?.voteAverage}</p>
//         <img src={urlImage} />
//       </div>
//     </>
//   );
// };

const urlGetMovieDetails = "https://api.themoviedb.org/3/movie/{id}";

const GetMovieDetails = async (id: string) => {
  const moviesResult = await THE_MOVIE_DB.get(
    urlGetMovieDetails.replace("{id}", id)
  )
    .then(({ data }) => data)
    .catch();
  return MovieResultToMovieType(moviesResult);
};

export const MovieDetails: React.FC<{}> = ({}) => {
  const history = useHistory();
  // let location = useLocation();
  // // let background = location.state && location.state.background;
  // console.log(location.state);
  // const route = history.location.pathname;
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieType>();

  useEffect(() => {
    const getMovieAsync = async () => {
      setMovie(await GetMovieDetails(id));
    };
    getMovieAsync();
  }, []);

  let back = (e: any) => {
    e.stopPropagation();
    history.goBack();
  };
  
  return MovieDetailsModal(back, movie);//MovieDetailsBody(movie);
};
