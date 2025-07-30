import { Label } from "../ui/label"
import { Input } from "../ui/input"
import type { UseFormRegister } from "react-hook-form"
import type { Step1Input } from "../form-steps/Step1"

type TextFieldProps = {
  label: string
  name: keyof Step1Input
  register: UseFormRegister<Step1Input>
  placeholder: string
}

export default function TextField({
  label,
  name,
  register,
  placeholder,
}: TextFieldProps) {
  return (
    <div>
      <Label>{label}</Label>
      <Input {...register(name)} placeholder={placeholder} />
    </div>
  )
}
