import React from 'react';


const styles = `
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: white;
  }

  .home-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .home-button {
    width: calc(50% - 20px);
    margin: 10px;
    padding: 20px;
    font-size: 30px;
    background-color: #e82127;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: 17rem;
  }

  .p {
    color: black;
    
  }

  @media (max-width: 768px) {
    .home-button {
      width: calc(100% - 20px);
    }
  }
`;

const HomePage = () => {
  return (
  
<div className="home-page">
      <style>{styles}</style>
      <button className="home-button">Home</button>
      <button className="home-button">Stations</button>
      <button className="home-button">Map</button>
      <button className="home-button">Info </button>
    </div>
  );
};

export default HomePage;

