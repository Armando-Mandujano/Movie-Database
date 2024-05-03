import React, {useEffect, useState} from 'react'
import { getNowPlayingMovies } from '../../services';
import { MovieCard } from '../../components/MovieCard';
import './NowPlaying.css'

const NowPlaying = () => {
  const [movies,setMovies]=useState<any[]>([]);
  const [loading,setLoading]=useState<boolean>(false);
  const [errorMovies,setErrorMovies]=useState<boolean>(false);

  const getNowPlaying = async () => {
    setLoading(true);
    await getNowPlayingMovies()
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
    getNowPlaying();
  },[]);

  return (
    <div>
      <br></br>
      <div className='text-4xl font-semibold text-center align-text-bottom'>
        <h1>NOW PLAYING</h1>
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

export default NowPlaying