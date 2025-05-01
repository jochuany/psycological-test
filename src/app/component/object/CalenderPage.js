"use client"

export default function CalenderPage({ year, month, date, weekday }) {
    return (
        <>
            <div className="bg-gray-100 w-[320px] h-auto rounded-2xl p-8">
                <div className="flex justify-between">
                    <div className="font-bold">{year}</div>
                    <div className="font-bold">{month}月</div>
                </div>
                <div className="text-[200px] text-center font-bold">{date}</div>
                <div className="text-[30px] text-center font-bold">星期{weekday}</div>
            </div>
        </>
    );
}