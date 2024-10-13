import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RollDice = ({ setCurrentDice, currentDice }) => {
  const generateRandomNumber = (min = 1, max = 6) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
  };
  useEffect(() => {
    // roleDice();
  });
  return (
    <DiceContainer>
      <div className="dice" onClick={() => roleDice()}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;

export default RollDice;
