import { LanguageSchema, type Language } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { TabsContent } from "../ui/tabs"
import { useResumeStore } from "@/store/ResumeStore"
import { Button } from "../ui/button"
import { languageDefaultValues } from "@/defaults"
import LanguagesList from "../lists/LanguagesList"
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select"
import ProficienciesList from "../lists/ProficienciesList"
import NextPreviousButtons from "../NextPreviousButtons"
import { v4 as uuidv4 } from "uuid"

export default function LanguageForm() {
  const { setResume, resume } = useResumeStore()
  const languages = resume?.language ?? []

  const form = useForm<Language>({
    resolver: zodResolver(LanguageSchema),
    defaultValues: languageDefaultValues,
  })

  const addLanguage = (data: Language) => {
    setResume({ language: [...languages, { ...data, id: uuidv4() }] })
    form.reset(languageDefaultValues)
  }

  const onRemoveLanguage = (languageId: string) => {
    const filteredLanguages = languages.filter(
      (language) => language.id !== languageId
    )
    setResume({ language: filteredLanguages })
  }

  return (
    <TabsContent value={"3"} className="space-y-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(addLanguage)}
          className="flex gap-4 items-end"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Language</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="proficiency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proficiency</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                  </FormControl>
                  <FormMessage />
                  <SelectContent>
                    <ProficienciesList />
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={"secondary"}
            disabled={!form.formState.isValid}
          >
            Add Language
          </Button>
        </form>
      </Form>

      <LanguagesList
        languages={languages}
        onRemoveLanguage={onRemoveLanguage}
      />

      <NextPreviousButtons disabled={!form.formState.isValid} />
    </TabsContent>
  )
}
