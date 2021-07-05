import React from 'react'
import styled from 'styled-components'
import {Link, useLocation} from 'react-router-dom'
import { GetUrlImg } from '../../util/Utilitario';
//import styles from  '../../css/Movie.module.css';


export type MovieType = {
    id:number;
    originalTitle:string;
    originalLanguage:string;
    popularity:number;
    title:string;
    overview:string;
    voteAverage:string;
    voteCount:string;
    posterPath:string;
    releaseDate:string;
    myVote?:number;
    isFavorite?:boolean;
    isWatchlist?:boolean;
}

export interface IMovieProps{
    movie: MovieType
}

// const Wrapper = styled.div`
//     width: 200px;
//     margin: 10px;
    
//     /* position: relative;
//     width: 200px;
//     margin: 10px;
//     display: inline-block; */


// `

// const Image = styled.img`
//     width: 100%;
//     border-radius: 3px;
//     /* display: block;
//     border-radius: 2px 2px 0 0;
//     position: relative;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     width: 100%;
//     height: 100%;
//     border-radius: 3px; */
    
// `

// const WrapperTools = styled.div`
//     color: #fff;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: calc(100% - 20px);
//     padding: 10px;
//     height: 80px;
//     text-align: justify;
//     background: rgb(0,0,0);
//     background: linear-gradient(180deg, rgba(0,0,0,0) 7%, rgba(0,0,0,0.17970938375350143) 26%, rgba(38,38,38,0.40379901960784315) 46%, rgba(24,24,24,0.4654236694677871) 73%);
//     font-family: 'Raleway', cursive;
//     border-radius: 0 0 3px 3px;


//     display: flex;
//     justify-content: space-evenly;
//     align-items: flex-end;
//     height: 150px;
// `

// const Title = styled.h4`
//     display: block;
//     width: 100%;
//     font-weight: 400;
//     /* color: #fff;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: calc(100% - 20px);
//     padding: 10px;
//     height: 40px;
//     background: #41414187;
//     font-family: 'Raleway', cursive;
//     border-radius: 0 0 10px 10px; */
// `
// const WrapperToolsUp = styled.div`
//     color: #fff;
//     position: absolute;
//     bottom: 130px;
//     left: 0;
//     width: calc(100% - 20px);
//     padding: 10px;
//     height: 80px;
//     text-align: justify;
    
//     font-family: 'Raleway', cursive;
//     border-radius: 3px 3px 0 0 ;


//     display: flex;
//     justify-content: space-evenly;
//     align-items: flex-start;
//     height: 150px;


// `

// const ToolsBar = styled.div`
    
// `



// const Wrapper = styled.div`
//     position: relative;
//     width: 200px;
//     margin: 10px;
//     display: inline-block;
//     -webkit-box-shadow: 1px 1px 9px -1px #000000; 
//     box-shadow: 1px 1px 9px -1px #000000;
// `

// const Image = styled.img`
//     width:  100%;
//     border-radius: 3px;
// `

// const Title = styled.h3`
//     font-family: 'Raleway', cursive;
//     font-weight: 400;
// `

// const Tools = styled.div`
//     position: static;
//     top: 0;
//     left: 0;
//     position: absolute;
//     background: rgb(0,0,0);
//     background: linear-gradient(180deg, rgba(0,0,0,0) 7%, rgba(0,0,0,0.17970938375350143) 26%, rgba(38,38,38,0.40379901960784315) 46%, rgba(24,24,24,0.4654236694677871) 73%);
//     /* width: 100%;
//     height: 100%;
//     background-color: red; */
// `

const urlMovieDetails:string = "/movie-details/{id}";


const Title = styled.h2`
    a{
        text-decoration: none;
        color: #fff;
    }
`

const LinkTo = styled.span`
    display: block;
    width: 100px;
    margin: 2em auto 1em;
    text-align: center;
    font-size: 12px;
    color: #fff;
    line-height: 1;
    position: relative;
    font-weight: 600;
    /* ::after {
        content: "→";
        opacity: 0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        transition: all 0.3s;
    }
    :hover::after {
        transform: translate(5px, -50%);
        opacity: 1;
    } */
`

const MenuContent = styled.ul`
    float: right;
    li {
        margin: 0 5px;
        position: relative;
    }
    span {
        transition: all 0.3s;
        opacity: 0;
    }
`

const WrapperCard = styled.div<{url:string}>`
    *{color: #fff};
    border-radius: 3px;
    background: url(${props => props.url});
    :hover ${MenuContent} span {
        transform: translate(-50%, 20px);
        opacity: 1;
    }
`

const Data = styled.div`
    ${LinkTo}::after {
        content: "→";
        opacity: 0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        transition: all 0.3s;
    }
    ${LinkTo}:hover::after {
        transform: translate(5px, -50%);
        opacity: 1;
    }   
    /* transform: translateY(calc(70px + 4em)); */
`

const Content = styled.div`
    
`

const Card = styled.div`
    float: left;
    padding: 0 1.7rem;
    width: 350px;
    height: 350px;
    ${MenuContent} {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    ${MenuContent}::before, ${MenuContent}::after {
        content: "";
        display: table;
    }
    ${MenuContent}::after {
        clear: both;
    }
    ${MenuContent} li {
        display: inline-block;
    }
    ${MenuContent} a {
        color: #fff;
        cursor: pointer;
        /* background-color: transparent;
        border: none;
        
        padding: 5px;
        :hover{
            background-color: #000000a9;
        } */
    }
    ${MenuContent} span {
        position: absolute;
        left: 50%;
        top: 0;
        font-size: 10px;
        font-weight: 700;
        /* font-family: "Open Sans"; */
        transform: translate(-50%, 0);
    }
    ${WrapperCard} {
        background-color: #fff;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
    }
    ${WrapperCard}:hover ${Data} {
        transform: translateY(0);
    }
    ${Data} {
        position: absolute;
        bottom: 40px;
        width: 100%;
        transform: translateY(calc(70px + 1em));
        transition: transform 0.3s;
    }
    ${Data} ${Content} {
        padding: 1em;
        position: relative;
        z-index: 1;
    }
    ${Title} {
        margin-top: 10px;
    } 
    input[type=checkbox] {
        display: none;
    }
    input[type=checkbox]:checked + ${MenuContent} {
        transform: translateY(-60px);
    }
    :hover{
        animation: pulse 3s infinite;
    }
`

const DateInfo = styled.div`

`

const Header = styled.div`
    color: #fff;
    padding: 1em;
    ::before, .header::after {
        content: "";
        display: table;
    }
    ::after {
        clear: both;
    }
    ${DateInfo} {
        float: left;
        font-size: 12px;
    }
`

export const Movie:React.FC<IMovieProps> = (props) => {
    const location = useLocation();
    const {title, id, posterPath, voteAverage, releaseDate} = props.movie;
    const urlImage = GetUrlImg(posterPath);
    const urlDetails = urlMovieDetails.replace("{id}", id.toString());
    return (
        <Card>
            <WrapperCard url={urlImage}>
                <Header>
                    <DateInfo>
                        {releaseDate}
                    </DateInfo>
                    <MenuContent>
                        <li><a>+ Wishlist</a></li>
                        <li><a onClick={() => console.log('asdas')}>+ Watched</a><span> Votes {voteAverage}</span></li>
                        {/* <li><a>✔</a></li>
                        <li><a>❤<span>{voteAverage}</span></a></li> */}
                        {/* <li><a>❤</a></li> */}
                    </MenuContent>
                </Header>
                <Link to={{pathname: urlDetails, state: {background:location}}}>
                    <Data>
                        <Content>
                            <Title>{title}</Title>
                            <LinkTo>Read more</LinkTo>
                        </Content>
                    </Data>
                </Link>
            </WrapperCard>
        </Card>
    )
}

export function MovieResultToMovieType(movieResult:any, accState:any = null){
    let movie:MovieType = {
        id: movieResult.id,
        originalTitle: movieResult.original_title,
        originalLanguage: movieResult.original_language,
        popularity: movieResult.popularity,
        title: movieResult.title,
        overview: movieResult.overview,
        voteAverage: movieResult.vote_average,
        voteCount: movieResult.vote_count,
        posterPath: movieResult.poster_path,
        releaseDate: movieResult.release_date,
        myVote: accState?.rated?.value,
        isFavorite: accState?.favorite,
        isWatchlist: accState?.watchlist
    }
    return movie;
}