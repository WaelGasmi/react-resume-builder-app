import app from "./app"
import { PORT } from "./config"

console.clear()

app
  .listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
  })
  .on("error", (err: Error) => {
    console.error(`Server failed to run ${err}`)
  })
