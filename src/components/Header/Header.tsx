import React from 'react';
import { Link } from 'react-router-dom';

const ROUTES = {
  HOME: "/",
  POPULAR: "/popular",
  TOPRATED: "/top-rated",
  NOW_PLAYING: '/now-playing',
  FAVORITES: '/favorites',
};

const Header: React.FC = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Movies DB</div>
        <ul className="flex gap-8">
          <li>
            <Link to={ROUTES.HOME} className="hover:text-gray-300 transition-colors duration-300">HOME</Link>
          </li>
          <li>
            <Link to={ROUTES.POPULAR} className="hover:text-gray-300 transition-colors duration-300">POPULAR</Link>
          </li>
          <li>
            <Link to={ROUTES.TOPRATED} className="hover:text-gray-300 transition-colors duration-300">TOP RATED</Link>
          </li>
          <li>
            <Link to={ROUTES.NOW_PLAYING} className="hover:text-gray-300 transition-colors duration-300">NOW PLAYING</Link>
          </li>
          <li>
            <Link to={ROUTES.FAVORITES} className="hover:text-gray-300 transition-colors duration-300">MY FAVORITES</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
