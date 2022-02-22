import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import PortfolioDetails from './pages/portfolio/Details';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/portfolio" />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio">
          <Route index element={<Portfolio />} />
          <Route path=":id" element={<PortfolioDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;