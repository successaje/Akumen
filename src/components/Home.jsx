import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Chess Platform</h1>
      <Link to="/chess">
        <button className="play-button">Play</button>
      </Link>
    </div>
  );
};

export default Home;
