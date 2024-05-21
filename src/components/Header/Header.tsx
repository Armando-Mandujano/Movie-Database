import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../store/app-context/app-context';
import {ROUTES} from "../../routes/constants"



const Header: React.FC = () => {
  const { logOut } = useAppContext();
  const navigate = useNavigate();
  const [isMenuOpen,setIsMenuOpen]= useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleLogout = async () => {
    try {
      await logOut();
      navigate(ROUTES.LOGIN);
    } catch (e) {
      console.log("error logout");
    }
  };

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
            <Link to={ROUTES.TOP_RATED} className="hover:text-gray-300 transition-colors duration-300">TOP RATED</Link>
          </li>
          <li>
            <Link to={ROUTES.NOW_PLAYING} className="hover:text-gray-300 transition-colors duration-300">NOW PLAYING</Link>
          </li>
          <li>
            <Link to={ROUTES.UPCOMING} className="hover:text-gray-300 transition-colors duration-300">UPCOMING</Link>
          </li>
          <li>
            <Link to={ROUTES.FAVORITES} className="hover:text-gray-300 transition-colors duration-300">MY FAVORITES</Link>
          </li>
          <li>
                <button
                  onClick={handleLogout}
                  className="block font-semibold text-[13px] text-gray-500"
                >
                  Logout
                </button>
              </li>

        </ul>
      </div>
    </nav>
  );
}

export default Header;
