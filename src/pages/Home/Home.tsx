import React, { useEffect, useState } from 'react';
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies } from '../../services';
import Carousel from '../../components/Carousel/Carousel'
import { useAppContext } from '../../store/app-context/app-context';

const Home: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<any>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<any>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any>([]);
  const { user, setUser, logOut } = useAppContext();
  console.log(user);

  const getPopular = async () => {
    await getPopularMovies()
      .then((res) => {
        if (res && res.data) {
          console.log(res.data, "res");
          setPopularMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  const getTopRated = async () => {
    await getTopRatedMovies()
      .then((res) => {
        if (res && res.data) {
          console.log(res.data, "res");
          setTopRatedMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };


  const getNowPlaying = async () => {
    await getNowPlayingMovies()
      .then((res) => {
        if (res && res.data) {
          console.log(res.data, "res");
          setNowPlayingMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  useEffect(() => {
    getPopular();
    getNowPlaying();
    getTopRated();
  
    if (typeof user === "undefined"){
      const localUser = localStorage.getItem("user");

      if(localUser){
        setUser(JSON.parse(localUser));
    }
            // Log out after 5 seconds of inactivity
            setTimeout(() => {
              logOut();
          }, 5000)
      }

  }, []);

  return (
    <div>
      <div className="text--size text-4xl font-semibold text-center align-text-bottom">Popular Movies</div>
      <Carousel movies={popularMovies} />
      <h1 className="text--size text-4xl font-semibold text-center align-text-bottom">Top Rated Movies</h1>
      <Carousel movies={topRatedMovies} />
      <h1 className="text--size text-4xl font-semibold text-center align-text-bottom">Now Playing Movies</h1>
      <Carousel movies={nowPlayingMovies} />
    </div>
  );
};

export default Home;