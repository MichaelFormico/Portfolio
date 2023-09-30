import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Border from './Border';


const PortfolioContainer = ({ children }) => {
  return (
    <div >
      <Border />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PortfolioContainer;
