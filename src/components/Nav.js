import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="mb-[-64px] z-10 relative p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-semibold">
            PastroKosoven
          </Link>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/raporto"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Raporto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;