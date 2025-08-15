import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
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
import NextPreviousButtons from "../NextPreviousButtons"
import { v4 as uuidv4 } from "uuid"

export default function SkillForm() {
  const { resume, setResume } = useResumeStore()
  const skills = resume?.skill ?? []

  const form = useForm<Skill>({
    resolver: zodResolver(SkillSchema),
    defaultValues: skillDefaultValues,
  })

  const addSkill = (data: Skill) => {
    if (data.name?.trim() === "") return
    if (Object.values(data).some((v) => v.trim() !== "")) {
      const newSkill: Skill = { ...data, id: uuidv4() }
      setResume({ skill: [...skills, newSkill] })
      form.reset(skillDefaultValues)
    }
  }

  const onRemoveSkill = (skillId: string) => {
    if (skillId) {
      const filteredSkills = skills.filter((skill) => skill.id !== skillId)
      setResume({ skill: filteredSkills })
    }
  }

  return (
    <TabsContent value="4" className="space-y-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addSkill)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl className="w-full">
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
                  <FormControl className="w-full">
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
          <Button
            type="submit"
            variant={"secondary"}
            disabled={!form.formState.isValid}
          >
            Add Skill
          </Button>
        </form>
      </Form>

      <SkillsList skills={skills} OnRemoveSkill={onRemoveSkill} />

      <NextPreviousButtons disabled={!form.formState.isValid} />
    </TabsContent>
  )
}
