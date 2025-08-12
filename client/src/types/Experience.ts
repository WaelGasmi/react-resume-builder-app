import { z } from "zod"

export const ExperienceSchema = z.object({
  id: z.string().optional(),
  resumeId: z.string().optional(),
  startDate: z.string().nonempty("Start date is required"),
  endDate: z.string().nonempty("End date is required"),
  location: z.string().nonempty("Location is required"),
  description: z.string().nonempty("Description is required"),
  corporate: z.string().nonempty("Corporate is required"),
})

export type Experience = z.infer<typeof ExperienceSchema>
