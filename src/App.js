import React from 'react';
import './App.css';
// Importing components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from './pages/MainPage';
import Product from './pages/Product';
import About from './pages/About';
import NavBar from './components/navbar/NavBar';
import Banner from './components/banners/Banner';
import AboutBanner from './components/banners/AboutBanner';
import ProductBanner from './components/banners/ProductBanner';

function App() {
  return (
    <Router>
      <div className="header">
        <div className="container">
          <NavBar />
          <Switch>
          <Route path="/products">
              <ProductBanner />
            </Route>
            <Route path="/about">
              <AboutBanner />
            </Route>
            <Route path="/">
              <Banner />
            </Route>
          </Switch>
        </div>
      </div>
      <Switch>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
