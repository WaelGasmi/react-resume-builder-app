import { useTabStore } from "@/store/TabStore"
import { Button } from "./ui/button"

export default function NextPreviousButtons() {
  const { next, previous, value } = useTabStore()

  return (
    <div className="flex gap-4">
      {value > 1 && <Button onClick={previous}>Previous</Button>}
      {value < 5 && <Button onClick={next}>Next</Button>}
    </div>
  )
}
