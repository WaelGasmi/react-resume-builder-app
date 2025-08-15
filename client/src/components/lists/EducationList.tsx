import type { Education } from "@/types"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Button } from "../ui/button"
import { X } from "lucide-react"

type EducationListProps = {
  educations: Education[]
  onRemoveEducation: (educationId: string) => void
}

export default function EducationList({
  educations,
  onRemoveEducation,
}: EducationListProps) {
  return (
    <div className="space-y-5 text-left">
      {educations.map((education) => (
        <Card key={education.id}>
          <CardHeader>
            <CardTitle>{education.institute}</CardTitle>
            <CardDescription>
              {education.startDate} - {education.endDate}
            </CardDescription>
            <CardAction>
              <Button
                className="hover:text-red-600"
                onClick={() => onRemoveEducation(education.id ?? "")}
              >
                <X />
              </Button>
            </CardAction>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
