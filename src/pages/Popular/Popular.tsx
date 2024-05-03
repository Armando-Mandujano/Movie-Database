import React, {useEffect, useState} from 'react'
import { getPopularMovies } from '../../services';
import { MovieCard } from '../../components/MovieCard';
import './Popular.css'

const Popular = () => {
  const [movies,setMovies]=useState<any[]>([]);
  const [loading,setLoading]=useState<boolean>(false);
  const [errorMovies,setErrorMovies]=useState<boolean>(false);

  const getPopular = async () => {
    setLoading(true);
    await getPopularMovies()
      .then((res) => {
        if (res && res.data) {
          console.log(res.data, "res");
          setMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, "err");
        setErrorMovies(true);
      });
    setLoading(false);
  };

  useEffect(()=>{
    setLoading(true);
    getPopular();
  },[]);

  return (
    <div>
      <br></br>
      <div className='text-4xl font-semibold text-center align-text-bottom'>
        <h1>POPULAR</h1>
      </div>
      <div className="movies-container">
        {loading && <div>Loading...</div>}
        {errorMovies && <div>Error...</div>}
        {movies?.length > 0 && 
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
              genreId={movie.genre_ids[0]}
            />
          ))
        }
      </div>
    </div>
  );
  
}

export default Popular