"use client"

import { useState } from "react";

import StartPage from "../component/page/StartPage";
import QuestionPage from "../component/page/QuestionPage";
import DisplayResultPage from "../component/page/DisplayResultPage";
import ResultPage from "../component/page/ResultPage";

export default function Croissant() {

  const [gameState, setGameState] = useState({
    state: 0, //測驗階段 0:start 1:question 2:displayResult 3:result
    questionSate: 0,
    totalQuestions: 3,
    score: 0
  });

  const prevState = function () {
    if (gameState.state <= 0) return null; // 小於零就結束這個function
    console.log("prev")
    setGameState({
      ...gameState, //解構 gameState
      state: gameState.state - 1
    })
  }

  const nextState = function () {
    if (gameState.state >= 3) return null; // 超過三就結束這個function
    console.log("next")
    setGameState({
      ...gameState, //解構 gameState
      state: gameState.state + 1
    })
  }

  return (

    <div className="w-screen h-screen bg-gray-100 flex  justify-center items-center">

      {gameState.state == 0 && <StartPage></StartPage>}  {/* 前面 true 的話 回傳 && 後面 */}
      {gameState.state == 1 && <QuestionPage></QuestionPage>}
      {gameState.state == 2 && <DisplayResultPage></DisplayResultPage>}
      {gameState.state == 3 && <ResultPage></ResultPage>}


      <div onClick={prevState}>PREV</div>

      <div onClick={nextState}>NEXT</div>



    </div>
  );
}