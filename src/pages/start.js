import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const HomePageButton = styled.button`
  flex-basis: 45%; /* Adjust this value to change the button width */
  margin: 10px;
  padding: 20px;
  font-size: 18px;
  text-align: center;
  background-color: white;
  color: red;
  border: 2px solid red;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePageButton>Button 1</HomePageButton>
      <HomePageButton>Button 2</HomePageButton>
      <HomePageButton>Button 3</HomePageButton>
      <HomePageButton>Button 4</HomePageButton>
    </HomePageContainer>
  );
};

export default HomePage;
