import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
export const Button = styled.button`
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  min-width: 220px;
  font-size: 16px;
  background-color: #000000;
  border-radius: 5px;
  border: none;
  color: white;
  border: 1px solid transparent;
  cursor: pointer;
  transform: 0.2s all ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.2s all ease-in;
  }
  
`;
export const OutlineButton = styled(Button)`
  /* display: flex; */
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid none;
    color: white;
    transition: 0.2s all ease-in;
  }
`;

const StartGame = ({ onClick }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={onClick}>Play now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
