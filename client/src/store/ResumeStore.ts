import type { Language, PersonalInformation, Resume } from "@/types"
import { create } from "zustand"

type ResumeStore = {
  resume: Resume | undefined
  personalInformation: PersonalInformation | undefined
  language: Language | undefined
  setResume: (data: Resume) => void
  setPersonalInformation: (data: PersonalInformation) => void
  setLanguage: (data: Language) => void
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: undefined,
  personalInformation: undefined,
  language: undefined,
  setResume: (data) => set({ resume: data }),
  setPersonalInformation: (data) => set({ personalInformation: data }),
  setLanguage: (data) => set({ language: data }),
}))
