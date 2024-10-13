import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RollDice = ({ roleDice, currentDice }) => {
  
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
