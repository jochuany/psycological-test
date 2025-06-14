import { create } from 'zustand'

// 建立 store hook，像是建立自己的資料集合 or 儲存空間
// 全域的狀態管理
const usePsyStore = create((set) => ({
    // states and actions
    state: 0, //測驗階段 0:start 1:question 2:displayResult 3:result
    questionState: 0,
    totalQuestions: 8,
    score: 0,
    updateState: (newState) => set((state) => ({ state: newState })),
    updateQuestionState: (newState) => set((state) => ({ questionState: newState })),
    updateTotalQuestionState: (newState) => set((state) => ({ totalQuestions: newState })),
    updateScore: (newState) => set((state) => ({ score: newState }))
}))

// 問題管理
const useQuestionStore = create((set) => ({
    questions: {
        "1": {
            title: "忙碌了一天終於下班下課了，這時候你最想做的事是？",
            options: [
                { title: "打開想看很久的劇，追劇放空一整晚", value: 1 },
                { title: "立刻約朋友，一起來個不醉不歸的聚餐", value: 3 },
                { title: "只想快快回家，安靜地閱讀或寫日記", value: 5 },
                { title: "終於有空閒時間，開始副業或興趣計畫", value: 7 }

            ]
        },
        "2": {
            title: "到了週末，你和朋友約好去看電影，但他臨時爽約，你會？",
            options: [
                { title: "覺得難過但能理解，就待在家吧", value: 1 },
                { title: "也沒什麼不好，立刻約其他朋友去看", value: 3 },
                { title: "心裡默默受傷，但不說出口", value: 5 },
                { title: "馬上調整計畫做別的事，時間不能浪費", value: 7 }
            ]
        },
        "3": {
            title: "在一件你很珍重的事情上，即將要做重大決定，這時你會？",
            options: [
                { title: "聽從直覺，心裡告訴我的就是對的", value: 1 },
                { title: "先問問別人的意見，再自己慢慢思考", value: 3 },
                { title: "深思熟慮、考慮各種後果後才決定", value: 5 },
                { title: "果斷迅速，勇敢承擔，愛我所擇", value: 7 }
            ]
        },
        "4": {
            title: "如果你有一個禮拜的假期，以下哪一種旅行最吸引你？",
            options: [
                { title: "慵懶的海邊小鎮自由之旅", value: 1 },
                { title: "熱鬧的城市文化探索之旅", value: 3 },
                { title: "靜謐的山中森林冥想之旅", value: 5 },
                { title: "刺激的自我挑戰冒險之旅", value: 7 }
            ]
        },
        "5": {
            title: "平時生活中面對壓力或艱難的事情時，你最常？",
            options: [
                { title: "先睡一覺，明天再才有力氣應付", value: 1 },
                { title: "找朋友聊聊，宣洩情緒、抒發壓力", value: 3 },
                { title: "躲起來自己慢慢消化，總會找到方法", value: 5 },
                { title: "壓力就是動力，做更多事來轉移注意力", value: 7 }
            ]
        },
        "6": {
            title: "目前為止，你覺得你的人際關係比較偏向哪種風格？",
            options: [
                { title: "和善不強求，喜歡自然相處，不擅長偽裝", value: 1 },
                { title: "熱情主動，喜歡主導話題，我就是焦點", value: 3 },
                { title: "安靜細膩，喜歡深入交流，談心才有意義", value: 5 },
                { title: "目標導向，重視效率與收穫，各取所需", value: 7 }
            ]
        },
        "7": {
            title: "某天一個不太熟的朋友想找你幫忙，你會？",
            options: [
                { title: "覺得尷尬但還是幫，積點陰德也不錯", value: 1 },
                { title: "樂於助人，在能力範圍內盡力而為", value: 3 },
                { title: "慎重考慮後決定，但拒絕會愧疚", value: 5 },
                { title: "直接問對方的需求與預期，不浪費時間", value: 7 }
            ]
        },
        "8": {
            title: "每天的生活都不太一樣，但你最喜歡的生活節奏是？",
            options: [
                { title: "悠閒自在、不被打擾的生活最舒服", value: 1 },
                { title: "每一天都要有變化、充滿很多人際互動", value: 3 },
                { title: "穩定、規律、有掌控感，不失控", value: 5 },
                { title: "快速進步、每天都要達成一點目標", value: 7 }
            ]
        }
    },
}))

// 儲存測驗結果
import { db } from "../fb/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

async function saveResult(resultType) {
    try {
        await addDoc(collection(db, "testResults"), {
            resultType,
            timestamp: serverTimestamp()
        });
    } catch (e) {
        console.error("儲存失敗：", e);
    }
}

export { saveResult }


export { usePsyStore }

export { useQuestionStore }