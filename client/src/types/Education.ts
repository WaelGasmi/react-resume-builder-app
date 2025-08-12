import { z } from "zod"

export const EducationSchema = z.object({
  id: z.string().optional(),
  resumeId: z.string().optional(),
  institute: z.string().nonempty("Institute is required"),
  startDate: z.string().nonempty("Start date is required"),
  endDate: z.string().nonempty("End date is required"),
})

export type Education = z.infer<typeof EducationSchema>
