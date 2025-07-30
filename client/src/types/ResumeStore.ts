import type { Step1 } from "./Step1"
import type { Step2 } from "./Step2"

export type ResumeStore = {
  currentTab: number
  step1: Step1
  step2: Step2
  setCurrentTab: () => void
  setStep1: (data: Step1) => void
  setStep2: (data: Step2) => void
}
