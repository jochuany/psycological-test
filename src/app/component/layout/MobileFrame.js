"use client"

export default function MobileFrame({ children }) {
    return (
        <>
            <div className="w-full h-full  bg-[#f7f3ee] flex justify-center items-center p-[30px] relative overflow-hidden
            sm:w-[314.4px] sm:h-[682.4px] sm:shadow-lg sm:border-1 sm:border-[#f2f2f2] sm:rounded-lg
            bg-[url(/bg.png)]">
                {children}
            </div>
        </>
    );
}