import { EducationSchema, type Education } from "@/types"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useResumeStore } from "@/store/ResumeStore"
import { Input } from "../ui/input"
import { TabsContent } from "../ui/tabs"

const defaultValues: Education = {
  institute: "",
  startDate: new Date(),
  endDate: new Date(),
  id: "",
  resumeId: "",
}

export default function EducationForm() {
  const [educations, setEducations] = useState<Education[]>([])

  const setResume = useResumeStore((state) => state.setResume)

  const form = useForm<Education>({
    resolver: zodResolver(EducationSchema),
    defaultValues: defaultValues,
  })

  const addEducation = (data: Education) => {
    setEducations((prev) => [...prev, data])
    form.reset(defaultValues)
  }

  useEffect(() => {
    setResume({ education: educations })
  }, [setResume, educations])

  return (
    <TabsContent value="5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addEducation)}>
          <FormField
            control={form.control}
            name="institute"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Institute</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add Education</Button>
        </form>
        {educations.map((edu) => (
          <>
            <p key={edu.institute}>{edu.institute}</p>
          </>
        ))}
      </Form>
    </TabsContent>
  )
}
