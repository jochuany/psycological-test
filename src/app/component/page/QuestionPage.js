"use client"

import Image from "next/image";
import MobileFrame from "../layout/MobileFrame";

import croGreenUp from "@/../public/1-question/croGreenUp.png";
import croGreenDown from "@/../public/1-question/croGreenDown.png";
import blurCircleQ1 from "@/../public/1-question/blurCircleQ1.png";
import { usePsyStore, useQuestionStore } from "@/app/store/store";


export default function QuestionPage({ questionIndex, nextStep }) {

    const questionData = useQuestionStore((state) => state);
    const psyData = usePsyStore((state) => (state));

    const clickAnswer = function (option) {
        console.log("click");
        psyData.updateScore(psyData.score + option.value)
        nextStep();
    }

    const getMainColor = function (prefix) {
        let colorString = "";

        if (questionIndex == 0) {
            colorString = prefix + "-[#bee351]";
        }
        else if (questionIndex == 1) {
            colorString = prefix + "-[#dd3e3e]";
        }
        else {
            colorString = prefix + "-[#89bcff]";
        }
        return colorString;
    }

    return (
        <>
            <MobileFrame>

                <Image className="absolute top-0 -translate-y-1/2" src={blurCircleQ1} alt=""></Image>

                <div className="flex flex-col justify-center items-center">
                    <Image src={croGreenUp} alt="" className="w-[88px] pb-14"></Image>

                    <div className="flex flex-col justify-center items-center gap-8">
                        <div className="text-[#90B62A] border-1 border-[#90B62A] w-[40px] h-[40px] rounded-full
                    flex justify-center items-center font-bold text-md">
                            Q{questionIndex + 1}
                        </div>

                        {/* question */}
                        <div className={`text-center font-bold text-xl ${getMainColor("text")}`}>
                            {questionData.questions[questionIndex + 1].title}
                        </div>


                        {/* options */}
                        {
                            questionData.questions[questionIndex + 1].options.map((option, index) => {

                                return (
                                    <>
                                        {questionIndex == 0 &&
                                            <div className={`bg-[#BEE351] w-full rounded-full text-white
                                                    py-[16px] text-xs flex justify-center items-center font-medium
                                                    shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition`}
                                                onClick={() => clickAnswer(option)} key={option.title + "green"}>
                                                {option.title}
                                            </div>}
                                        {questionIndex == 1 &&
                                            <div
                                                className={`bg-[#DD3E3E] w-full rounded-full text-white
                                                    py-[16px] text-xs flex justify-center items-center font-medium
                                                    shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
                                                onClick={() => clickAnswer(option)} key={option.title + "red"}>
                                                {option.title}
                                            </div>
                                        }
                                        {questionIndex == 2 &&
                                            <div
                                                className={`bg-[#89BCFF] w-full rounded-full text-white
                                                    py-[16px] text-xs flex justify-center items-center font-medium
                                                    shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition`}
                                                onClick={() => clickAnswer(option)} key={option.title + "blue"}>
                                                {option.title}
                                            </div>
                                        }
                                    </>
                                )
                            })
                        }

                        {/* button */}
                        {/* <div className="flex flex-col gap-[26px] w-full">
                            <div className="bg-[#BEE351] w-full rounded-full flex justify-center items-center
                        text-white py-[16px] text-xs font-medium shadow-[0px_4px_0px_1px_#90B62A]
                        hover:translate-y-0.5 transition cursor-pointer"
                                onClick={clickAnswer}>乖乖待著⋯ 然後偷偷膨脹三倍大</div>

                            <div className="bg-[#BEE351] w-full rounded-full flex justify-center items-center
                        text-white py-[16px] text-xs font-medium shadow-[0px_4px_0px_1px_#90B62A]
                        hover:translate-y-0.5 transition cursor-pointer"
                                onClick={clickAnswer}>等個屁！我已經開始發酵狂飆了</div>

                            <div className="bg-[#BEE351] w-full rounded-full flex justify-center items-center
                        text-white py-[16px] text-xs font-medium shadow-[0px_4px_0px_1px_#90B62A]
                        hover:translate-y-0.5 transition cursor-pointer"
                                onClick={clickAnswer}>發…什麼？我忘記了，我睡著了</div>
                        </div> */}

                    </div >

                    <Image src={croGreenDown} alt="" className="w-[88px] pt-14"></Image>

                </div>

                <Image className="absolute bottom-0 translate-y-1/2" src={blurCircleQ1} alt=""></Image>


            </MobileFrame>
        </>
    );
}