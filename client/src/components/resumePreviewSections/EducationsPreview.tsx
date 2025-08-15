import type { Education } from "@/types"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

type EducationsPreviewProps = { educations: Education[] | undefined }

const cardClass =
  "bg-accent border-none shadow-none outline-none p-0 break-after-avoid"

export default function EducationsPreview({
  educations,
}: EducationsPreviewProps) {
  if (!educations) return null

  return (
    <>
      <h1>Education</h1>
      {educations.map((education) => (
        <Card className={cardClass}>
          <CardHeader>
            <CardTitle>{education.institute}</CardTitle>
            <CardDescription>
              {education.startDate} - {education.endDate}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  )
}
