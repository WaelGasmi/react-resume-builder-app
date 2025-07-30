import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { TabsContent } from "../ui/tabs"
import { Button } from "../ui/button"
import { Step1Schema } from "@/types/Step1Schema"
import TextField from "../form-fields/TextField"
import { useResumeStore } from "@/store/ResumeStore"

export type Step1Input = z.infer<typeof Step1Schema>

export default function Step1() {
  const { register, handleSubmit } = useForm<Step1Input>({
    resolver: zodResolver(Step1Schema),
  })

  const setStep1 = useResumeStore((state) => state.setStep1)
  const step1 = useResumeStore((state) => state.step1)
  const setCurrentTab = useResumeStore((state) => state.setCurrentTab)

  const onSubmit = (data: Step1Input) => {
    setStep1(data)
    setCurrentTab()
  }

  console.log(step1)

  return (
    <TabsContent value="1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          register={register}
          name="firstName"
          label="First Name"
          placeholder="Enter your First Name"
        />

        <TextField
          register={register}
          name="lastName"
          label="Last Name"
          placeholder="Enter your Last Name"
        />

        <TextField
          register={register}
          name="email"
          label="Email"
          placeholder="Enter your Email"
        />

        <TextField
          register={register}
          name="location"
          label="Location"
          placeholder="Enter your Location"
        />

        <TextField
          register={register}
          name="phone"
          label="Phone"
          placeholder="Enter your Phone"
        />

        <TextField
          register={register}
          name="github"
          label="Github"
          placeholder="Enter your Github"
        />

        <TextField
          register={register}
          name="linkedin"
          label="Linkedin"
          placeholder="Enter your Linkedin"
        />

        <TextField
          register={register}
          name="portfolio"
          label="Portfolio"
          placeholder="Enter your Portfolio"
        />

        <Button type="submit">Next</Button>
      </form>
    </TabsContent>
  )
}
