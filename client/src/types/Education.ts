import { z } from "zod"

export const EducationSchema = z.object({
  id: z.string().optional(),
  resumeId: z.string().optional(),
  institute: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
})

export type Education = z.infer<typeof EducationSchema>
