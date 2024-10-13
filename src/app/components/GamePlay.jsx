import React, { useState } from "react";
import TotalScore from "@/app/components/TotalScore";
import NumberSelector from "@/app/components/NumberSelector";
import RollDice from "@/app/components/RollDice";
import styled from "styled-components";
const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice setCurrentDice={setCurrentDice} currentDice={currentDice} />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  padding-top: 20px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
export default GamePlay;
