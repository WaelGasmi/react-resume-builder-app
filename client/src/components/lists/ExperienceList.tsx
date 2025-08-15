import type { Experience } from "@/types"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { X } from "lucide-react"
import { Button } from "../ui/button"

type experienceListProps = {
  experiences: Experience[]
  onRemoveExperience: (expId: string) => void
}

export default function ExperienceList({
  experiences,
  onRemoveExperience,
}: experienceListProps) {
  return (
    <div className="space-y-5 text-left">
      {experiences.map((exp) => (
        <Card key={exp.id}>
          <CardHeader>
            <CardTitle>{exp.corporate}</CardTitle>
            <CardDescription>
              {exp.startDate} - {exp.endDate}
            </CardDescription>
            <CardAction>
              <Button
                className="hover:text-red-600"
                onClick={() => onRemoveExperience(exp.id ?? "")}
              >
                <X />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent> {exp.description} </CardContent>
        </Card>
      ))}
    </div>
  )
}
