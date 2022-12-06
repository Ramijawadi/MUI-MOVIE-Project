import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MovieInfo from './pages/movie-info/movieInfo';
import Home from './pages/movie-info/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path='/' element={<App />} >

          <Route path='/' element={<Home />} />
          <Route path='/movie/:movieId' element={<MovieInfo />} />

        </Route>
      </Routes>


    </Router>
  </React.StrictMode>

);

