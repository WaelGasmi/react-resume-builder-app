import { z } from "zod"

export const ExperienceSchema = z.object({
  id: z.string().optional(),
  resumeId: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  location: z.string().optional(),
  description: z.string().optional(),
  corporate: z.string().optional(),
})

export type Experience = z.infer<typeof ExperienceSchema>
