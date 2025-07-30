import { z } from "zod"

export const Step2Schema = z.object({
  company: z.string().min(2, "Company name is required"),
  position: z.string().min(2, "Position is required"),
  startDate: z.date("Start Date is required"),
  endDate: z.date("End Date is required"),
  description: z.string().min(2).max(140),
  location: z.string().min(2, "Location is required").max(140),
})
