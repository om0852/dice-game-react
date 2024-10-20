import React, { useState } from "react";
import styled from "styled-components";
const Box = styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    text-align: right;
  }
`;

const NumberSelector = ({ selectedNumber, setSelectedNumber, error ,setError}) => {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <p className="text-red-600">
        {error ? "You have not selected any number" : null}
      </p>
      <div className="flex">
        {array.map((item, index) => (
          <Box
            isSelected={item === selectedNumber}
            onClick={() => {
              setSelectedNumber(item);
              setError(false);
            }}
            key={index}
          >
            {item}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
