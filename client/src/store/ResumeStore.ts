import type { Resume } from "@/types"
import { create } from "zustand"

type ResumeStore = {
  resume: Resume | undefined
  setResume: (data: Partial<Resume>) => void
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: undefined,

  setResume: (data) =>
    set((state) => ({
      resume: state.resume ? { ...state.resume, ...data } : (data as Resume),
    })),
}))
