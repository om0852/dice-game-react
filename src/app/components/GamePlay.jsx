import React, { useState } from "react";
import TotalScore from "@/app/components/TotalScore";
import NumberSelector from "@/app/components/NumberSelector";
import RollDice from "@/app/components/RollDice";
import styled from "styled-components";
const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [error,setError]=useState(false);

  const generateRandomNumber = (min = 1, max = 6) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (selectedNumber != null) {
      const randomNumber = generateRandomNumber(1, 7);
      setCurrentDice(randomNumber);
      if (selectedNumber === randomNumber) {
        setScore((prev) => prev + randomNumber);
      } else {
        setScore((prev) => prev - 2);
      }
      setSelectedNumber(null);
    }
    else{
        setError(true)
    }
  };
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
        error={error}
        setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice roleDice={roleDice} currentDice={currentDice} />
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
