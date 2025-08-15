import type { Language } from "@/types"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { X } from "lucide-react"

type LanguagesListProps = {
  languages: Language[]
  onRemoveLanguage: (languageId: string) => void
}

export default function LanguagesList({
  languages,
  onRemoveLanguage,
}: LanguagesListProps) {
  return (
    <div className="space-y-5 text-left">
      {languages.map((language) => (
        <Card key={language.id} className="w-xs text-left p-4">
          <CardHeader>
            <CardTitle>{language.name}</CardTitle>
            <CardDescription>{language.proficiency}</CardDescription>
            <CardAction
              className="cursor-pointer hover:text-red-600"
              onClick={() => onRemoveLanguage(language.id ?? "")}
            >
              <X />
            </CardAction>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
