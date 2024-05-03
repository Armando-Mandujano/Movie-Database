import React from "react";
import { IMovieCard } from "./types";
import { IMAGE_SOURCE } from "../../constants/moviesMock";
import  "../../constants/genres.json";
import {Pill} from '../Pill'
import './MovieCard.css'
import genresData from '../../constants/genres.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constants";

const MovieCard: React.FC<IMovieCard> = ({
    title,
    genreId,
    movieId,
    voteAverage,
    posterPath,
}) => {
    const navigate = useNavigate();
    //states
    const poster = IMAGE_SOURCE  + posterPath;
    const getGenre = (genreId: number): string => {
        const genre = genresData.genres.find(g => g.id === genreId);
        return genre ? genre.name : 'Unknown Genre';
      };  
      const navigateMovies = (id:number, movieName:string)=>{
        navigate(`${ROUTES.SHOW}${id}`,{state:{movieName}}); //
      }   
      

      return (
        <div className="movie-card"
        onClick={()=>{
          navigateMovies(movieId,title);
        }}
        >
          <img className="show-thumb" src={poster} alt='poster'/>
          <div className="info-show">
            <div className="show-label"><Pill title={getGenre(genreId)} color='red' /></div>
            <p className="show-label-title">{title}</p>
            <p className="show-calcification">
              <FontAwesomeIcon icon={faStar} />
              {voteAverage} / 10
            </p>
          </div>
        </div>
      );
      
  

}
export default MovieCard
//Imports
//Constantes primero hooks y luego estados
//Funciones que nosotros creemos
//Use effects 
// return