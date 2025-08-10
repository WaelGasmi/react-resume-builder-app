import { create } from "zustand"

type TabStore = {
  value: number
  previous: () => void
  next: () => void
}

export const useTabStore = create<TabStore>((set) => ({
  value: 1,
  previous: () => set((state) => ({ value: Math.max(1, state.value - 1) })),
  next: () => set((state) => ({ value: Math.min(state.value + 1) })),
}))
