import { z } from "zod"

export const Step3Schema = z.object({
  skill: z.string().min(2, "Skill is required"),
  proficiency: z.string().min(2, "Proficiency is required"),
})
