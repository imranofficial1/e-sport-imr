
import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to IMR MART</h1>
      <p>Your one-stop shop for all things amazing!</p>
      <div className="quotes-container">
        <div className="quote">
          <p>Capture every moment with clarity. Our laptop cameras redefine what it means to be seen.</p>
        </div>
        <div className="quote">
          <p>Experience the world in high definition. Our laptop cameras bring your virtual meetings to life.</p>
        </div>
        <div className="quote">
          <p>See the difference with every detail. Upgrade to our top-of-the-line laptop cameras today!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
