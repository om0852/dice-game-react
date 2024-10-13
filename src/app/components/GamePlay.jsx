import React, { useState } from "react";
import TotalScore from "@/app/components/TotalScore";
import NumberSelector from "@/app/components/NumberSelector";
import RollDice from "@/app/components/RollDice";
import Rules from "@/app/components/Rules";
import styled from "styled-components";
import { Button, OutlineButton } from "./StartGame";
const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [showRules, setShowRules] = useState(false);
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
    } else {
      setError(true);
    }
  };

  const resetScore = () => {
    setScore(0);
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
      <div>
        <div className="btn">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={() => setShowRules(prev=>!prev)}>{showRules?"Hide result":"Show Rules"}</Button>
        </div>
        {showRules && <Rules />}{" "}
      </div>
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
  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    gap: 10px;
    align-items: center;
  }
`;
export default GamePlay;
