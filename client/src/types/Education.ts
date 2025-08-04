import { z } from "zod"

export const EducationSchema = z.object({
  id: z.string().optional(),
  resumeId: z.string().optional(),
  startDate: z.date(),
  endDate: z.union([z.date() ?? z.string()]).optional(),
  institute: z.string(),
})

export type Education = z.infer<typeof EducationSchema> 