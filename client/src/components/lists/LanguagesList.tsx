import type { Language } from "@/types"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { X } from "lucide-react"
import { useResumeStore } from "@/store/ResumeStore"

type LanguagesListProps = { languages: Language[] }

export default function LanguagesList({ languages }: LanguagesListProps) {
  const setResume = useResumeStore((state) => state.setResume)

  const removeLanguage = (name: string | undefined) => {
    const filteredLanguages = languages.filter(
      (language) => language.name !== name
    )
    setResume({ language: filteredLanguages })
  }

  return (
    <>
      {languages.map((language) => (
        <Card key={language.name} className="w-xs text-left p-4">
          <CardHeader>
            <CardTitle>{language.name}</CardTitle>
            <CardDescription>{language.proficiency}</CardDescription>
            <CardAction
              className="cursor-pointer hover:text-red-600"
              onClick={() => removeLanguage(language.name)}
            >
              <X />
            </CardAction>
          </CardHeader>
        </Card>
      ))}
    </>
  )
}
