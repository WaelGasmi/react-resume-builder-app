import type { Skill } from "@/types"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

type SkillPreviewProps = { skills: Skill[] | undefined }

const cardClass =
  "bg-white border-none shadow-none outline-none p-0 break-after-avoid"

export default function SkillsPreview({ skills }: SkillPreviewProps) {
  if (!skills) return null

  return (
    <>
      {skills.map((skill) => (
        <Card className={cardClass}>
          <CardHeader className="flex gap-4">
            <CardTitle className="text-sm">
              <Badge>{skill.name}</Badge>
            </CardTitle>
            {skill.proficiency && (
              <CardDescription className="text-xm">
                <Badge variant={"outline"}>{skill.proficiency}</Badge>
              </CardDescription>
            )}
          </CardHeader>
        </Card>
      ))}
    </>
  )
}
