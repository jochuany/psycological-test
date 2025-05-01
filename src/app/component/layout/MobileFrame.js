"use client"

export default function MobileFrame({ children }) {
    return (
        <>
            <div className="w-[314.4px] h-[682.4px] bg-white rounded-lg flex justify-center items-center">
                {children}
            </div>
        </>
    );
}