"use client"

import MobileFrame from "../layout/MobileFrame";

import { useState, useEffect } from "react";


export default function DisplayResultPage({ nextStep }) {

    const [countDown, setCountDown] = useState(5);

    useEffect(() => {
        if (countDown <= 0) return;

        const timer = setInterval(() => {
            setCountDown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [countDown]);

    return (
        <MobileFrame>

            <div className="w-full flex flex-col justify-center items-center gap-20">

                <div className="text-center font-normal text-lg text-[#e17a4f]">
                    每種鮮奶茶<br />都是最好的鮮奶茶
                </div>

                {countDown > 0 ? (
                    <div className="text-[#e17a4f] font-normal text-sm">{"產生結果中⋯⋯ " + countDown}</div>
                ) : (
                    <div
                        onClick={nextStep}
                        className="px-4 py-1 transition cursor-pointer text-center text-white bg-[#e17a4f]
                        rounded-xl text-sm hover:bg-transparent hover:text-[#e17a4f] border-1 border-[#e17a4f] font-normal"
                    >
                        顯示我的鮮奶茶人格
                    </div>
                )}

            </div>

        </MobileFrame>
    );
}