import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { IMovieCard } from '../MovieCard/types';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MovieCard } from '../MovieCard';
import './Carousel.css'

interface CarouselProps {
  movies: any[];
  children?: React.ReactNode; 
}

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - carouselRef.current!.offsetLeft;
    const scroll = (x - startX) * 1.5;
    carouselRef.current!.scrollLeft = scrollLeft - scroll;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="carousel"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={carouselRef}
    >
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
        ))}
      <div className="carousel-overlay" />
    </div>
  );
};

export default Carousel;