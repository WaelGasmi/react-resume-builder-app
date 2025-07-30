import type { ResumeStore } from "@/types/ResumeStore"
import type { Step2 } from "@/types/Step2"
import { create } from "zustand"
import { step2DefaultValues } from "../types/step2DefaultValues"
import { step1DefaultValues } from "../types/step1DefaultValues"

export const useResumeStore = create<ResumeStore>((set) => ({
  currentTab: 1,
  step1: step1DefaultValues,
  step2: step2DefaultValues,
  setCurrentTab: () =>
    set((state) => ({
      currentTab: state.currentTab + 1,
    })),
  setStep2: (data: Step2) => set({ step2: data }),
}))
