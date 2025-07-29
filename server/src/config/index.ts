import dotenv from "dotenv"

dotenv.config({ debug: false })

export const PORT: number = Number(process.env.PORT) || 5093

export const DATABASE_URL: string =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_Qpm3gTEr4ZKC@ep-dry-fire-a2x0qskh-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
