import { z } from "zod"

export const ExperienceSchema = z.object({
  id: z.string().optional(),
  resumeId: z.string().optional(),
  startDate: z.date(),
  endDate: z.union([z.date() ?? z.string()]).optional(),
  location: z.string(),
  description: z.string().optional(),
})

export type Experience = z.infer<typeof ExperienceSchema> 