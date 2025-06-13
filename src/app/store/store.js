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
            title: "忙碌了一天，下班（下課）後你最想做的事是？",
            options: [
                { title: "追劇放空一整晚", value: 1 },
                { title: "與三五好友聚餐", value: 3 },
                { title: "安靜地閱讀或寫日記", value: 5 },
                { title: "馬上展開下一個副業或興趣計畫", value: 7 }

            ]
        },
        "2": {
            title: "你和朋友約好要一起出門，但他突然臨時爽約，你會？",
            options: [
                { title: "難過但能理解", value: 1 },
                { title: "立刻約其他朋友代替", value: 3 },
                { title: "默默覺得受傷但不說出口", value: 5 },
                { title: "馬上調整計畫，時間不能浪費", value: 7 }
            ]
        },
        "3": {
            title: "你即將要做一個重大的決定，這時你傾向？",
            options: [
                { title: "聽從直覺", value: 1 },
                { title: "先詢問別人的意見", value: 3 },
                { title: "深思熟慮、考慮各種後果", value: 5 },
                { title: "果斷迅速，勇敢承擔", value: 7 }
            ]
        },
        "4": {
            title: "如果你有一個禮拜的假期，以下哪一種旅行最吸引你？",
            options: [
                { title: "慵懶海邊小鎮自由行", value: 1 },
                { title: "熱鬧的城市文化探索", value: 3 },
                { title: "靜謐的山中森林冥想", value: 5 },
                { title: "自我挑戰型冒險旅程", value: 7 }
            ]
        },
        "5": {
            title: "平時生活中面對壓力時，你最常？",
            options: [
                { title: "先睡一覺，明天再說", value: 1 },
                { title: "找朋友聊聊宣洩情緒", value: 3 },
                { title: "躲起來自己慢慢消化", value: 5 },
                { title: "轉化成動力，做更多事來轉移注意力", value: 7 }
            ]
        },
        "6": {
            title: "你覺得你的人際關係比較偏向哪種風格？",
            options: [
                { title: "和善不強求，喜歡自然相處", value: 1 },
                { title: "熱情主動，喜歡主導話題", value: 3 },
                { title: "安靜細膩，喜歡深入交流", value: 5 },
                { title: "目標導向，重視效率與收穫", value: 7 }
            ]
        },
        "7": {
            title: "遇到不熟的人想找你幫忙，你會？",
            options: [
                { title: "覺得尷尬但還是幫", value: 1 },
                { title: "樂於助人，看狀況", value: 3 },
                { title: "慎重考慮後決定", value: 5 },
                { title: "直接問對方的需求與預期，不浪費時間", value: 7 }
            ]
        },
        "8": {
            title: "每天的生活都不一樣，但你最喜歡的生活節奏是？",
            options: [
                { title: "悠閒自在、不被打擾最好", value: 1 },
                { title: "有變化與互動的每一天", value: 3 },
                { title: "穩定、規律、有掌控感", value: 5 },
                { title: "快速進步、永不止步", value: 7 }
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