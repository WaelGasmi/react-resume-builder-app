import type { Skill } from "@/types"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { X } from "lucide-react"
import { Button } from "../ui/button"

type SkillsListProps = {
  skills: Skill[]
  OnRemoveSkill: (skillId: string) => void
}

export default function SkillsList({ skills, OnRemoveSkill }: SkillsListProps) {
  return (
    <div className="space-y-5 text-left">
      {skills.map((skill) => (
        <Card key={skill.id}>
          <CardHeader>
            <CardTitle>{skill.name}</CardTitle>
            <CardDescription>{skill.proficiency}</CardDescription>
            <CardAction>
              <Button
                className="hover:text-red-600"
                onClick={() => OnRemoveSkill(skill.id ?? "")}
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
