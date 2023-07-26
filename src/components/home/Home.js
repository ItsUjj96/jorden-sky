// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <div className="buttons-container">
        <Link to="/table">
          <button className="home-btn">Table Page</button>
        </Link>
        <Link to="/graph" >
          <button className="home-btn">Graph Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
