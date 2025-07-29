import { createClient, SupabaseClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "../config"

export const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY)
