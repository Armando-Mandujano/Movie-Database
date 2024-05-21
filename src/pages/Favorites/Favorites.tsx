import React, { useEffect, useState } from 'react'
import { IMovieDetail } from './types';
import { getDetails } from '../../services/movies/getDetails';
import { MovieCard } from '../../components/MovieCard';
import { useAppContext } from '../../store/app-context/app-context';


const Favorites = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [shows, setShows] = useState<IMovieDetail[]>([]);
  const favorites: string = localStorage.getItem("favorites") || "";
  const { setUser } = useAppContext();


  const runGetFavorites = async () => {
    if (favorites.length) {

      const favoritesArray = JSON.parse(favorites); 
      const newShows = await Promise.all(
        favoritesArray.map(async (favoriteId: string) => {
          return getDetails(favoriteId)
            .then((res) => {
              if (res && res.data) {
                // res?.data
                return res.data;
              }
            })
            .catch((err) => {
              console.log(err, "err");
            });
        })
      );
      setShows(newShows);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    runGetFavorites();
    console.log("se guardo user en el app context");
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <h2 className='text-4xl font-semibold text-center mt-8 mb-4'>My Favorites</h2>
      {!loading ? (
        shows.length > 0 ? (
          <div className='movies-container flex flex-wrap justify-center'>
            {shows.map((show: IMovieDetail) => (
              <MovieCard
                key={show.id}
                movieId={show.id}
                title={show.title}
                genreId={show.genres[0].id}
                voteAverage={show.vote_average}
                posterPath={show.poster_path}
              />
            ))}
          </div>
        ) : (
          <div className="flex-grow flex justify-center items-center">
            <div className='text-4xl font-semibold text-center'>
              Oops, it seems that you don't have any favorite movie yet...
            </div>
          </div>
        )
      ) : (
        <div className="flex-grow flex justify-center items-center">
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );  
};

export default Favorites;
