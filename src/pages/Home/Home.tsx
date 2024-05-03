import React, { useEffect, useState } from 'react';
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies } from '../../services';
import Carousel from '../../components/Carousel/Carousel'

const Home: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const getData = async () => {
    const popular = await getPopularMovies();
    const topRated = await getTopRatedMovies();
    const nowPlaying = await getNowPlayingMovies();
    setPopularMovies(popular.results);
    setTopRatedMovies(topRated.results);
    setNowPlayingMovies(nowPlaying.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="text--size">Popular Movies</div>
      <Carousel movies={popularMovies} />
      <h1 className="text--size">Top Rated Movies</h1>
      <Carousel movies={topRatedMovies} />
      <h1 className="text--size">Now Playing Movies</h1>
      <Carousel movies={nowPlayingMovies} />
    </div>
  );
};

export default Home;