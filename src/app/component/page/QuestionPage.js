"use client"

import MobileFrame from "../layout/MobileFrame";

export default function QuestionPage({ questionIndex }) {
    return (
        <>
            <MobileFrame>
                question page: Q{questionIndex}
            </MobileFrame>
        </>
    );
}