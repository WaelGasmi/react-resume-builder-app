import type { Experience } from "@/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

type ExperiencesPreviewProps = { experiences: Experience[] | undefined }

const cardClass =
  "bg-accent border-none shadow-none outline-none p-0 break-after-avoid break-after-avoid"

export default function ExperiencesPreview({
  experiences,
}: ExperiencesPreviewProps) {
  if (!experiences) return null

  return (
    <>
      <h1>Experience</h1>
      {experiences.map((experience) => (
        <Card className={cardClass}>
          <CardHeader>
            <CardTitle>{experience.corporate}</CardTitle>
            <CardDescription>
              {experience.startDate} - {experience.endDate}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xs">{experience.description}</CardContent>
        </Card>
      ))}
    </>
  )
}
