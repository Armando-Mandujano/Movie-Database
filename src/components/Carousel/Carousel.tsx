import React from 'react';
import { MovieCard } from '../MovieCard';

const Carousel: React.FC<any> = ({ movies }) => {
  return(
    <div className='flex overflow-x-auto scroll-smooth'>
      {movies.map((movie:any)=>(
        <MovieCard 
          key={movie.id}
          title={movie.title}
          genreId={movie.genre_ID}
          voteAverage={movie.voteAverage}
          posterPath={movie.poster_path} movieId={0}/>
      ))}
    </div>
  )
 
};

export default Carousel;