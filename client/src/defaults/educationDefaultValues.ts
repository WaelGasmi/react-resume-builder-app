import type { Education } from "@/types"
import { today } from "@/utils/today"

export const educationDefaultValues: Education = {
  institute: "",
  startDate: today,
  endDate: today,
  id: "",
  resumeId: "",
}
