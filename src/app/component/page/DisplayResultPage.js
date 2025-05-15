"use client"

import MobileFrame from "../layout/MobileFrame";

export default function DisplayResultPage({ nextStep }) {
    return (
        <MobileFrame>
            <div className="text-center font-bold text-xl">
                顯示我的失控可頌
            </div>
            <div onClick={nextStep}>
                顯示結果
            </div>
        </MobileFrame>
    );
}