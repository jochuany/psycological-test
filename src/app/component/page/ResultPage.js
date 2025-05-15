"use client"

import MobileFrame from "../layout/MobileFrame";
import { usePsyStore, useQuestionStore } from "@/app/store/store";


export default function ResultPage() {
    const psyState = usePsyStore((state) => state);



    return (
        <>
            <MobileFrame>
                <div>
                    {psyState.score}
                </div>

                <div>
                    重新測驗
                </div>
            </MobileFrame>
        </>
    );
}