import dotenv from "dotenv"

dotenv.config({ debug: false })

export const PORT: number = Number(process.env.PORT) || 5000
export const SUPABASE_URL: string =
  process.env.SUPABASE_URL || "https://oucxfntnxpbvqgflgnyp.supabase.co"
export const SUPABASE_KEY: string =
  process.env.SUPABASE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91Y3hmbnRueHBidnFnZmxnbnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3ODYyMTIsImV4cCI6MjA2OTM2MjIxMn0.04pYpl5ReK30-6yaZQmhcxt-GgvVhuyCTueDhlHwsNs"
export const DATABASE_URL: string =
  process.env.DATABASE_URL ||
  "prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19yTnhiejZ2Q1N3UTNlVWlORDlhTy0iLCJhcGlfa2V5IjoiMDFLMUFZQzc5NzBWSkRYREZDWUNLQ0FCOUsiLCJ0ZW5hbnRfaWQiOiJkMzViOTFiYjA3NjhjYjE5ZmU5YmFmNDMzNjU0YWU2ZGRhYzRjMjY1Nzc3MTE4OWVmOTY0MWUzOTUxZjU3MTBmIiwiaW50ZXJuYWxfc2VjcmV0IjoiZjY5MmNiYTctZmQ0OC00ZWE1LTk4NmUtNWIzZDljNzc0ZDc3In0.U7jMOTk2JQYhN7jhAJQH8_uB5MTPZFLBqpjHdOPE9ts"
