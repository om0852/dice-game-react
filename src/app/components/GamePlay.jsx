import React from "react";
import TotalScore from "@/app/components/TotalScore";
import NumberSelector from "@/app/components/NumberSelector";
import styled from "styled-components";
const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore />
        <NumberSelector />
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.main`
.top-section{
display: flex;
justify-content: space-around;
align-items: end;
}
`;
export default GamePlay;
