"use client"

export default function MobileFrame({ children }) {
    return (
        <>
            <div className="w-[314.4px] h-[682.4px] bg-[#f7f3ee] rounded-lg flex justify-center items-center p-[30px]
            relative overflow-hidden shadow-lg border-1 border-[#f2f2f2]">
                {children}
            </div>
        </>
    );
}