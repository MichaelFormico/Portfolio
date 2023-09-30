import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header className="text-teal pt-20 pl-5">
      <div className="container flex flex-col items-start justify-start w-full h-full">
        <Link to="/" className="text-5xl font-bold font-custom hover:text-yellow-200">
          Michael Formico
        </Link>
        <div className='text-sm pb-20 pl-4 font-custom text-yellow-200'>
          Designer and Developer
        </div>
        <nav>
          <ul className="flex flex-col space-y-2 list-none">
            <li>
              <Link to="/" className="hover:text-yellow-200 font-custom">
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-yellow-200 font-custom">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/resume" className="hover:text-yellow-200 font-custom">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-200 font-custom">
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
