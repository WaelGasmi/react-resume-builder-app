import { z } from "zod"

export const Certification = z.object({
  title: z.string().min(2, "Title is required"),
  issuer: z.string().min(2, "Issuer is required"),
  startDate: z.date("Start Date is required"),
  endDate: z.date("End Date is required"),
})
