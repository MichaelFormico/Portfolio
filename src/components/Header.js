import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-gray-900 pt-10">
      <div className="container flex flex-col items-start justify-start w-full h-full">
        <Link to="/" className="text-4xl font-bold hover:text-gray-400">
          Michael Formico
        </Link>
        <div className='text-sm pb-32 pl-4'>
          Designer and Developer
        </div>
        <nav>
          <ul className="flex flex-col space-y-2 list-none">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-gray-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/resume" className="hover:text-gray-400">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
