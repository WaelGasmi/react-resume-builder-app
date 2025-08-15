import type { Resume } from "@/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type ResumeStore = {
  resume: Resume | undefined
  setResume: (data: Partial<Resume>) => void
}

export const useResumeStore = create<ResumeStore>()(
  persist<ResumeStore>(
    (set) => ({
      resume: undefined,
      setResume: (data) =>
        set((state) => ({
          resume: state.resume
            ? { ...state.resume, ...data }
            : (data as Resume),
        })),
    }),
    {
      name: "resume-content",
    }
  )
)
