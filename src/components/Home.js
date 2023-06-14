import React from 'react';

const Home = () => {
  const name = 'Your Name';
  const city = 'Your City';

  return (
      <div id="home">
        <h1 style={{ color: 'firebrick' }}>{`${name} is a Web Developer from ${city}`}</h1>
      </div>
  );
};

export default Home;