import { ExperienceSchema, type Experience } from "@/types"
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
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { TabsContent } from "../ui/tabs"
import { useResumeStore } from "@/store/ResumeStore"

const defaultValues: Experience = {
  location: "",
  startDate: new Date(),
  endDate: new Date(),
  description: "",
  resumeId: "",
  id: "",
}

export default function WorkExperienceForm() {
  const [experiences, setExperiences] = useState<Experience[]>([])

  const setResume = useResumeStore((state) => state.setResume)

  const form = useForm<Experience>({
    resolver: zodResolver(ExperienceSchema),
    defaultValues: defaultValues,
  })

  const addExperience = (data: Experience) => {
    setExperiences((prev) => [...prev, data])
    form.reset(defaultValues)
  }

  useEffect(() => {
    setResume({ experience: experiences })
  }, [setResume, experiences])

  return (
    <TabsContent value="2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addExperience)}>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add Experience</Button>
        </form>
        {experiences.map((exp) => (
          <>
            <p> {exp.description} </p>
          </>
        ))}
      </Form>
    </TabsContent>
  )
}
