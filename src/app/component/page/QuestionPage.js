"use client"

import Image from "next/image";
import MobileFrame from "../layout/MobileFrame";

import titleImg from "@/../public/0-start/title.svg";
import startBtn from "@/../public/0-start/startBtn.png";
import blurCircleY from "@/../public/0-start/blurCircleY.png";


export default function QuestionPage({ questionIndex, nextStep }) {
    return (
        <>
            <MobileFrame>
                question page: Q{questionIndex}

                <Image src={blurCircleY} alt="" className="absolute top-0 -translate-y-1/2"></Image>

                <div className="flex flex-col justify-between items-center h-[46vh]">

                    <Image src={titleImg} alt="你是哪一種可頌麵包？" className="w-[180px]"></Image>

                    <div className="text-[12px] font-extrabold text-[#B65A0F] text-center leading-6">
                        有些人天生酥脆，有些人出爐時就塌了。<br></br>
                        你努力發酵、翻滾、等待出爐，<br></br>
                        結果還是變成一坨可頌災難。<br></br>
                        沒關係，這世界不缺完美麵包，<br></br>
                        缺的是——像你一樣軟爛卻獨特的存在。<br></br>
                        現在，就來看看你是什麼等級的失控可頌吧。
                    </div>

                    <Image src={startBtn} alt="START" onClick={nextStep} className="w-[100px]"></Image>

                </div>

                <Image src={blurCircleY} alt="" className="absolute bottom-0 translate-y-1/2"></Image>

            </MobileFrame>
        </>
    );
}