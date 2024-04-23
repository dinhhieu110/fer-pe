import React from 'react';

function Home() {
  return (
    <div className="d-flex flex-column align-items-center">
      <img
        src="./imgs/image.png"
        alt="img"
        style={{ width: '100%', height: '40vh' }}
      />
      <h1 style={{ color: 'blue' }}>Welcome to online courses</h1>
    </div>
  );
}

export default Home;
