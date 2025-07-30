import { z } from "zod"

export const Step3Schema = z.object({
  language: z.string().min(2, "Language is required"),
  proficiency: z.string().min(2, "Proficiency is required"),
})
