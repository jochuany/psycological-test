"use client"

import { DatePicker } from "antd";
import CalenderPage from "@/app/component/object/CalenderPage";

import StartPage from "../component/page/StartPage";
import QuestionPage from "../component/page/QuestionPage";
import DisplayResultPage from "../component/page/DisplayResultPage";
import ResultPage from "../component/page/ResultPage";

export default function Croissant() {

  return (

    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">

      <StartPage></StartPage>
      <QuestionPage></QuestionPage>
      <DisplayResultPage></DisplayResultPage>
      <ResultPage></ResultPage>

    </div>
  );
}