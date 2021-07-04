import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GetUrlImg } from "../../util/Utilitario";
import {  MovieType } from "./Movie";
import styled from "styled-components";
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { MovieRating } from "./MovieRating";
import { SVGetMovieDetails } from "../../services/themoviedb/MovieService";


const WrapperMovieDetails = styled.div`
  position: relative;
  max-width: 800px;
  width: 40%;
  padding: 2rem;
  background-color: #323233;
  color: #ebebeb;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 4px;
`
const BtnCerrar = styled.button`
  position: absolute;
  left: calc(100% - 2.5rem);
    top: 0.5rem;
  float: right;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 10px;
  color: #f7f7f7;
  font-size: 14px;
  background-color: #676767;
  font-weight: 600;
  :hover{
    font-size: 15px;
    background-color: #5c5c5c;
    font-weight: 600;
    cursor: pointer;
  }
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
                    <h5>Overview</h5>
                    <p>{movie?.overview}</p>
                  </OverView>
                  <Info>
                    <h5>Information</h5>
                    <p>Vote: {movie?.voteAverage}</p>
                    <p>Title: {movie?.originalTitle}</p>
                    <p>Lan: {movie?.originalLanguage}</p>
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

export const MovieDetails: React.FC<{}> = ({}) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieType>();

  useEffect(() => {
    const getMovieAsync = async () => {
      setMovie(await SVGetMovieDetails(id));
    };
    getMovieAsync();
  }, []);

  let back = (e: any) => {
    e.stopPropagation();
    history.goBack();
  };
  
  return MovieDetailsModal(back, movie);//MovieDetailsBody(movie);
};
