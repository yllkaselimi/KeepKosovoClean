import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="mb-[-64px] z-10 relative p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/"  className='font-black text-2xl text-white uppercase '>
            PASTROKOSOVEN
          </Link>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/raporto"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Raporto
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/evente"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Evente
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/login"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Kycu
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/register"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Regjistrohu
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;