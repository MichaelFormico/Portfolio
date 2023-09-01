import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Border from './Border';


const PortfolioContainer = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto h-screen overflow-y-scroll">
      <Border />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PortfolioContainer;
