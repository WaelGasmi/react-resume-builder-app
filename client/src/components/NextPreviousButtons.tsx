import { useTabStore } from "@/store/TabStore"
import { Button } from "./ui/button"

type NextPreviousButtonsProps = { disabled: boolean }

export default function NextPreviousButtons({
  disabled,
}: NextPreviousButtonsProps) {
  const { next, previous, value } = useTabStore()

  return (
    <div className="flex gap-4">
      {value > 1 && (
        <Button onClick={previous} disabled={disabled}>
          Previous
        </Button>
      )}
      {value < 5 && (
        <Button onClick={next} disabled={disabled}>
          Next
        </Button>
      )}
    </div>
  )
}
