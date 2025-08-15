import { TabsContent } from "./ui/tabs"
import NextPreviousButtons from "./NextPreviousButtons"
import { Button } from "./ui/button"

export default function Preferences() {
  return (
    <TabsContent value={"6"} className="space-y-5 text-left">
      Preferences
      <div>
        <Button>Download CV</Button>
      </div>
      <NextPreviousButtons />
    </TabsContent>
  )
}
