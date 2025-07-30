import { z } from "zod"

export const Step4Schema = z.object({
  institution: z.string().min(2, "Institution name is required"),
  degree: z.string().min(2, "Degree is required"),
  fieldOfStudy: z.date("Field Study is required"),
  startDate: z.date("Start Date is required"),
  endDate: z.date("End Date is required"),
  grade: z.string().min(2, "Grade is required").max(140),
  description: z.string().min(2, "Description is required"),
})
