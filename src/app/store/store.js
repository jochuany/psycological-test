import { create } from 'zustand'

// 建立 store hook，像是建立自己的資料集合 or 儲存空間
// 全域的狀態管理
const usePsyStore = create((set) => ({
    // states and actions
    state: 0, //測驗階段 0:start 1:question 2:displayResult 3:result
    questionState: 0,
    totalQuestions: 3,
    score: 0,
    updateState: (newState) => set((state) => ({ state: newState })),
    updateQuestionState: (newState) => set((state) => ({ questionState: newState })),
    updateTotalQuestionState: (newState) => set((state) => ({ totalQuestions: newState })),
    updateScore: (newState) => set((state) => ({ score: newState }))
}))


export { usePsyStore }