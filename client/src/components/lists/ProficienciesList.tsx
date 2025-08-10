import { LANGS_PROFICIENCIES } from "@/constants"
import { SelectItem } from "../ui/select"

export default function ProficienciesList() {
  return (
    <>
      {LANGS_PROFICIENCIES.map((proficiency) => (
        <SelectItem key={proficiency} value={proficiency}>
          {proficiency}
        </SelectItem>
      ))}
    </>
  )
}
