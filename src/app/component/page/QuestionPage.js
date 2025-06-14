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

    const mainColors = ["#c79d77", "#bc827a", "#a06f80", "#e17a4f", "#b9a89b", "#a37d6e", "#837c78", "#a56b5b"];

    const optionButtonStyle = "w-full rounded-xl text-white py-[10px] text-xs font-normal flex justify-center items-center font-medium cursor-pointer transition";


    const [hoverIndex, setHoverIndex] = useState(null);
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

    return (
        <>
            <MobileFrame>

                <img src="/bg-milktea.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px]" />

                <div className="w-full flex flex-col justify-start items-center gap-10 z-10">

                    <div className="w-full flex flex-col justify-center items-center gap-4">

                        {/* 題數 */}
                        <div className="flex justify-center items-center font-bold text-sm"
                            style={{
                                color: mainColors[questionIndex],
                                borderColor: mainColors[questionIndex]
                            }}>
                            Q{questionIndex + 1} / 8
                        </div>

                        {/* question */}
                        <div className="w-full h-[60px] text-center font-normal text-lg"
                            style={{
                                color: mainColors[questionIndex],
                            }}>
                            {questionData.questions[questionIndex + 1].title}
                        </div>

                    </div >

                    {/* options */}
                    <div className="w-full flex flex-col gap-4">
                        {
                            questionData.questions[questionIndex + 1].options.map((option, index) => {

                                const isHovering = isDesktop && hoverIndex === index;

                                return (
                                    <div
                                        key={option.title + questionIndex}
                                        style={{
                                            backgroundColor: isHovering ? "transparent" : mainColors[questionIndex],
                                            border: `1px solid ${mainColors[questionIndex]}`,
                                            color: isHovering ? mainColors[questionIndex] : "white"
                                        }}
                                        className={optionButtonStyle}
                                        onClick={() => clickAnswer(option)}
                                        onMouseEnter={() => isDesktop && setHoverIndex(index)}
                                        onMouseLeave={() => isDesktop && setHoverIndex(null)}
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