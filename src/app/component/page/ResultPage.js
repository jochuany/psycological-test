"use client"

import { useEffect, useState } from "react";
import MobileFrame from "../layout/MobileFrame";
import { usePsyStore, useQuestionStore } from "@/app/store/store";

import { saveResult } from "@/app/store/store";

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../fb/firebase";



export default function ResultPage() {
    const psyState = usePsyStore((state) => state);

    const [resultType, setResultType] = useState(null);

    const [totalCount, setTotalCount] = useState(null);
    const [sameTypeCount, setSameTypeCount] = useState(null);

    // 決定 resultType
    useEffect(() => {
        const score = psyState.score;
        let type = 1;
        if (score >= 8 && score <= 16) type = 1;
        else if (score >= 17 && score <= 28) type = 2;
        else if (score >= 29 && score <= 40) type = 3;
        else if (score >= 41 && score <= 52) type = 4;
        else if (score >= 53 && score <= 56) type = 5;
        setResultType(type);

        // 存到 Firebase
        addDoc(collection(db, "results"), { type });
    }, [psyState.score]);

    // 計算百分比
    useEffect(() => {
        if (resultType === null) return;

        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "results"));
            const allTypes = querySnapshot.docs.map((doc) => doc.data().type);
            const total = allTypes.length;
            const same = allTypes.filter((type) => type === resultType).length;

            setTotalCount(total);
            setSameTypeCount(same);
        };

        fetchData();
    }, [resultType]);


    const mainColors = ["#c79d77", "#8ca57a", "#b17855", "#e17a4f", "#9c8d80"];

    const teas = ["/3-result/01.png", "/3-result/02.png", "/3-result/03.png", "/3-result/04.png", "/3-result/05.png"];



    return (
        <>
            <MobileFrame>
                <div className="w-full h-full flex flex-col justify-center items-center">

                    <div className="w-full h-full px-4 py-6 rounded-xl mb-8 flex flex-col justify-between relative"
                        style={{
                            backgroundColor: mainColors[resultType - 1]
                        }}>

                        <div className="font-normal text-white">你是</div>
                        <div className="font-medium text-2xl underline underline-offset-8 decoration-white decoration-dotted decoration-4">
                            {(resultType == 1) && (<p className="text-white">英式伯爵鮮奶茶</p>)}
                            {(resultType == 2) && (<p className="text-white">日式抹茶鮮奶茶</p>)}
                            {(resultType == 3) && (<p className="text-white">焦糖可可鮮奶茶</p>)}
                            {(resultType == 4) && (<p className="text-white">泰式香濃鮮奶茶</p>)}
                            {(resultType == 5) && (<p className="text-white">芝麻豆乳鮮奶茶</p>)}
                        </div>

                        <div className="font-normal text-xs">
                            {(resultType == 1) && (<p className="text-white leading-6">你是大家的避風港，<br />常個性溫暖、善解人意。<br />你喜歡平穩的生活節奏，<br />常也樂於照顧身邊的人，<br />常像一杯簡單純粹的伯爵鮮奶茶，<br />常不張揚卻令人安心。</p>)}
                            {(resultType == 2) && (<p className="text-white leading-6">你喜歡分析、講究細節，做事有條理，<br />常常是團隊中最冷靜的一個。<br />你的世界像抹茶一樣沈穩、有深度，<br />不怕慢，只求穩。</p>)}
                            {(resultType == 3) && (<p className="text-white leading-6">你重視情感與連結，常懷念過去，<br />對朋友與記憶有著深深的眷戀。<br />像可可鮮奶茶一樣香甜，<br />與你相處總讓人覺得溫暖又幸福。</p>)}
                            {(resultType == 4) && (<p className="text-white leading-6">你天生有份吸引力，<br />思維快速、說話有邏輯，<br />總是讓人忍不住跟著你走。<br />你就像泰奶一樣外表吸睛、口味濃烈，<br />是無法忽視的存在。</p>)}
                            {(resultType == 5) && (<p className="text-white leading-6">你不喜歡走傳統路線，<br />追求與眾不同、充滿創意。<br />你總能在平凡中找到獨特風味，<br />像芝麻豆乳鮮奶茶般特別又難忘，<br />是生活中的另類靈感源泉。</p>)}
                        </div>

                        <div className="text-white font-normal text-xs underline underline-offset-4 decoration-white leading-6">
                            ＊在其他 {totalCount - 1} 人裡，有 {sameTypeCount - 1} 人也是這杯！
                        </div>

                        <div className="flex justify-end">
                            <img src={teas[resultType - 1]} className="w-[160px] z-10 translate-x-[20px]" />
                        </div>

                        <div className="bg-white w-full h-[120px] absolute bottom-0 right-0 rounded-b-xl"></div>

                    </div>

                    <div className="px-4 py-1 transition cursor-pointer text-center text-white bg-[#e17a4f]
                    rounded-xl text-sm hover:bg-transparent hover:text-[#e17a4f] border-1 border-[#e17a4f] font-normal"
                        onClick={() => window.location.reload()}>
                        再測一次
                    </div>
                </div>
            </MobileFrame>
        </>
    );
}