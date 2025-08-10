import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { TabsContent } from "../ui/tabs"
import { SkillSchema, type Skill } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { PROFICIENCIES, SKILLS } from "@/constants"
import { Button } from "../ui/button"
import { useResumeStore } from "@/store/ResumeStore"
import { skillDefaultValues } from "@/defaults/skillDefaultValues"
import SkillsList from "../lists/SkillsList"

export default function SkillForm() {
  const { resume, setResume } = useResumeStore()
  const skills = resume?.skill ?? []

  const form = useForm<Skill>({
    resolver: zodResolver(SkillSchema),
    defaultValues: skillDefaultValues,
  })

  const addSkill = (data: Skill) => {
    setResume({ skill: [...skills, data] })
    form.reset(skillDefaultValues)
  }

  return (
    <TabsContent value="4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addSkill)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Skill" />
                    </SelectTrigger>
                  </FormControl>
                  <FormMessage />
                  <SelectContent>
                    {SKILLS.map((skill) => (
                      <SelectItem key={skill} value={skill}>
                        {skill}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="proficiency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proficiency</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Proficiency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PROFICIENCIES.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button type="submit">Add Skill</Button>
        </form>
      </Form>

      <SkillsList skills={skills} />
    </TabsContent>
  )
}
