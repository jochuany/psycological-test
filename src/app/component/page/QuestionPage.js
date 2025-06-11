"use client"

import Image from "next/image";
import MobileFrame from "../layout/MobileFrame";

import { usePsyStore, useQuestionStore } from "@/app/store/store";

import { useState } from "react";


export default function QuestionPage({ questionIndex, nextStep }) {

    const questionData = useQuestionStore((state) => state);
    const psyData = usePsyStore((state) => (state));

    const clickAnswer = function (option) {
        console.log("click");
        psyData.updateScore(psyData.score + option.value)
        nextStep();
    }

    const mainColors = ["#c79d77", "#b17855", "#8ca57a", "#e17a4f", "#b793c3", "#a37d6e", "#837c78", "#9c8d80"];

    const optionButtonStyle = "w-full rounded-xl text-white py-[10px] text-xs font-normal flex justify-center items-center font-medium cursor-pointer transition";

    return (
        <>
            <MobileFrame>


                <div className="flex flex-col justify-start items-center gap-10">

                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="border-1 w-[40px] h-[40px] rounded-full flex justify-center items-center font-normal text-md"
                            style={{
                                color: mainColors[questionIndex],
                                borderColor: mainColors[questionIndex]
                            }}>
                            Q{questionIndex + 1}
                        </div>

                        {/* question */}
                        <div className="text-center font-normal text-lg"
                            style={{
                                color: mainColors[questionIndex],
                            }}>
                            {questionData.questions[questionIndex + 1].title}
                        </div>

                    </div >

                    {/* options */}
                    <div className="w-full flex flex-col gap-4">
                        {
                            questionData.questions[questionIndex + 1].options.map((option) => {
                                const [isHovering, setIsHovering] = useState(false);

                                return (
                                    <div
                                        key={option.title + questionIndex}
                                        style={{
                                            backgroundColor: isHovering ? "#f7f3ee" : mainColors[questionIndex],
                                            border: `1px solid ${mainColors[questionIndex]}`,
                                            color: isHovering ? mainColors[questionIndex] : "white"
                                        }}
                                        className={optionButtonStyle}
                                        onClick={() => clickAnswer(option)}
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                    >
                                        {option.title}
                                    </div>
                                );
                            })
                        }
                    </div>


                </div>



            </MobileFrame>
        </>
    );
}