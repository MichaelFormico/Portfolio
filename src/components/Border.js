import React from 'react';
import backgroundPortfolio from "./images/backgroundPortfolio.gif";
import './Border.css';

const Border = ({ children }) => {
  return (
    // <div className="fixed inset-6 border-4 border-green-700 overflow-hidden h-9/10 px-4 py-4">
    //   {children}
    // </div>
    <div className="fixed inset-6 border-4 border-teal overflow-hidden h-9/10">
      <div id='backgroundgif'>{children}
  {/* <img
        src= {backgroundPortfolio}
        alt= 'background'
        className='w-full opacity-60 bg'
        />   */}
  </div>
   </div>
  );
};

export default Border;
