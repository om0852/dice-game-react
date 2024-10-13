"use client";
import styled from "styled-components";
import StartGame from "@/app/components/StartGame";
import GamePlay from "@/app/components/GamePlay";
import { useState } from "react";
export default function Home() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return <>{!isGameStarted ? <StartGame onClick={toggleGamePlay} /> : <GamePlay />}</>;
}
