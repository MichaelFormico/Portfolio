import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Border from './components/Border';

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <Border>
        <Header handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Border>
    </Router>
  );
};

export default App;
