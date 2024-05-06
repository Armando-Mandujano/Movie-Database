import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { getDetails } from "../../services/movies/getDetails";
import Carousel from "../../components/Carousel/Carousel";
import { getRecommendationsMovies } from '../../services';
import MovieCard from "../../components/MovieCard/MovieCard";
import Pill from "../../components/Pill/Pill";

const Show = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string>(""); 

  const [movies, setMovies] = useState<any[]>([]);

  const goBack = () => {
    navigate(-1);
  };

  const addFavorite = () => {
    const favs = favorites.length > 0 ? JSON.parse(favorites) : []; 
    const newFavorites = [...favs, id]; 
    setFavorites(JSON.stringify(newFavorites)); 
    setIsFavorite(true);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFavorite = () => {
    const favs = favorites.length > 0 ? JSON.parse(favorites) : [];
    let newFavorites = [...favs];
    newFavorites = newFavorites.filter((e) => e !== id);
    setFavorites(JSON.stringify(newFavorites));
    setIsFavorite(false);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const getMovieDetail = async () => {
    await getDetails(String(id))
      .then((res) => {
        if (res && res.data) {
          setShow(res.data);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
    setLoading(false);
  };

  const getRecommendations = async () => {
    setLoading(true);
    await getRecommendationsMovies(String(id))
      .then((res) => {
        if (res && res.data) {
          console.log(res.data, "res");
          setMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
    setLoading(false);
  };

  useEffect(() => {
    const favs = localStorage.getItem("favorites") || "";
    setFavorites(favs);
    if (favs.includes(String(id))) {
      setIsFavorite(true);
    }
    setLoading(true);
    getMovieDetail();
    getRecommendations();
    setIsFavorite(favs.includes(String(id)));
  }, [id]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="w-1/3">
          {show.poster_path && (
            <MovieCard 
              key={show.id}
              movieId={show.id}
              posterPath={show.poster_path}
              title={show.title}
              voteAverage={show.vote_average}
              genreId={show.genres && show.genres.length > 0 ? show.genres[0].id : undefined}
            />
          )}
        </div>
        <div className="w-2/3 p-4">
          <div className="text-xl font-bold mb-2">{show.title || 'Loading...'}</div>
          <div className="text-sm">{show.tagline || 'No tagline available'}</div>
          <div className="text-sm mb-4">{show.overview || 'No overview available'}</div>
          <div>
            <strong>Genres:</strong>
            {show.genres ? show.genres.map((genre: { id: React.Key | null | undefined; name: string; }) => (
              <Pill key={genre.id} title={genre.name} color="green" />
            )) : <span>Loading genres...</span>}
          </div>
          <div>
            <strong>Release Date:</strong> {show.release_date ? new Date(show.release_date).toLocaleDateString() : 'Loading...'}
          </div>
          <div>
            <strong>Runtime:</strong> {show.runtime ? `${show.runtime} minutes` : 'Loading...'}
          </div>
          <div>
            <strong>Status:</strong> {show.status || 'Loading...'}
          </div>
          <div>
            <strong>Vote Average:</strong> {show.vote_average ? show.vote_average : 'Loading...'}
          </div>
          <div className="mt-4">
            {isFavorite ? (
              <button className="bg-red-500 text-white p-2 rounded" onClick={removeFavorite}>
                Remove from favorites
              </button>
            ) : (
              <button className="bg-blue-500 text-white p-2 rounded" onClick={addFavorite}>
                Add to favorites
              </button>
            )}
            <br></br>
            <button onClick={goBack}>Go Back</button>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <h2 className="text-xl font-bold mb-2">Recommendations</h2>
        <Carousel movies={movies} />
      </div>
    </div>
  );
  
};

export default Show;