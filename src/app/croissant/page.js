"use client"

import { useState } from "react";

import StartPage from "../component/page/StartPage";
import QuestionPage from "../component/page/QuestionPage";
import DisplayResultPage from "../component/page/DisplayResultPage";
import ResultPage from "../component/page/ResultPage";

import { usePsyStore } from "@/app/store/store";

export default function Croissant() {

  const psyState = usePsyStore((state) => state);

  // const [gameState, setGameState] = useState({
  //   state: 0, //測驗階段 0:start 1:question 2:displayResult 3:result
  //   questionState: 0,
  //   totalQuestions: 3,
  //   score: 0
  // });

  //上一步
  const prevState = function () {
    if (gameState.state <= 0) return null; // 小於零就結束這個function
    console.log("prev")
    // setGameState({
    //   ...gameState, //解構 gameState
    //   state: gameState.state - 1
    // })
    psyState.updateState(psyState.state - 1);
  }

  //下一步
  const nextStep = function () {
    if (psyState.state >= 3) return null; // 超過三就結束這個function

    //答題階段判斷，超過題數按下一步後，才進到下一階段
    if (psyState.state == 1) {

      //如果還沒超過題數，題數+1
      if (psyState.questionState < psyState.totalQuestions) {
        psyState.updateQuestionState(psyState.questionState + 1);
        // setGameState({
        //   ...psyState,
        //   questionState: psyState.questionState + 1
        // });

      } else {
        psyState.updateState(psyState.state + 1);

        // setGameState({
        //   ...psyState,
        //   state: psyState.state + 1
        // });
      }
    }
    else {

      console.log("next")

      // setGameState({
      //   ...psyState, //解構 gameState
      //   state: psyState.state + 1,
      // })

      psyState.updateState(psyState.state + 1);

    }
  }

  return (

    <div className="w-screen h-screen bg-gray-100 flex  justify-center items-center">

      {psyState.state == 0 && <StartPage nextStep={nextStep}></StartPage>}  {/* 前面 true 的話，回傳 && 後面 */}
      {psyState.state == 1 && <QuestionPage nextStep={nextStep} questionIndex={psyState.questionState}></QuestionPage>}
      {psyState.state == 2 && <DisplayResultPage></DisplayResultPage>}
      {psyState.state == 3 && <ResultPage></ResultPage>}


      <div onClick={prevState}>PREV</div>

      <div onClick={nextStep}>NEXT</div>



    </div>
  );
}