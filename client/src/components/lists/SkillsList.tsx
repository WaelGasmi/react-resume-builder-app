import type { Skill } from "@/types"
import React from "react"

type SkillsListProps = { skills: Skill[] }

export default function SkillsList({ skills }: SkillsListProps) {
  return (
    <div>
      {skills.map((skill) => (
        <React.Fragment>
          <p>{skill.name}</p>
          <p>{skill.proficiency}</p>
        </React.Fragment>
      ))}
    </div>
  )
}
