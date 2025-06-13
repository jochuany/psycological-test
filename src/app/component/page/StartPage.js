"use client"

import MobileFrame from "../layout/MobileFrame";

export default function StartPage({ nextStep }) {
    return (
        <>
            <MobileFrame>


                <div className="w-full h-full flex flex-col justify-center items-center gap-14">

                    <div className="w-full text-center font-medium text-[#b58860] text-2xl
                    underline underline-offset-8 decoration-[#b58860] decoration-dotted decoration-4">你是哪一種鮮奶茶？</div>

                    <div className="text-[12px] font-normal text-[#b58860] text-center leading-6">
                        每個人心中都有一杯專屬的鮮奶茶<br /><br />
                        有些人像原味鮮奶茶一樣溫和穩定<br />有些人則像泰式鮮奶茶一樣濃烈搶眼<br /><br />
                        你的個性、習慣和生活方式<br />又對應哪一種鮮奶茶風味呢？<br /><br />
                        來找出屬於你的鮮奶茶人格吧！
                    </div>

                    <div onClick={nextStep} className="px-4 py-1 transition cursor-pointer text-center text-white bg-[#b58860]
                    rounded-xl text-sm hover:bg-[#f7f3ee] hover:text-[#b58860] border-1 border-[#b58860] font-normal">
                        開始
                    </div>

                </div>


            </MobileFrame>
        </>
    );
}