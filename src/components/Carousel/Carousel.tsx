import React from 'react';
import { MovieCard } from '../MovieCard';

const Carousel: React.FC<any> = ({ movies }) => {
  return (
    <div className="flex overflow-x-auto scroll-smooth space-x-4 p-4 bg-gray-100 ">
      {movies.map((movie: any) => (
        <div key={movie.id} className="flex-none w-60 md:w-80 lg:w-96 overflow-x-auto scroll-smooth h-full min-h-[500px] grid p-5 bg-white shadow-md rounded-lg"> 
          <MovieCard 
              key={movie.id}
              movieId={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
              genreId={movie.genre_ids[0]}
          />
        </div>
      ))}
    </div>
  );
};


export default Carousel;