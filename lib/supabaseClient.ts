import { createClient } from "@supabase/supabase-js";

// These are the public "anon" URL/key for the Nestly Supabase project.
// They are safe to ship in client-side code — access is controlled by
// Row Level Security policies on the database (see supabase/schema.sql),
// not by keeping this key secret.
const SUPABASE_URL = "https://drfdtzdcgadwrgamyexe.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZmR0emRjZ2Fkd3JnYW15ZXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3OTE3NTcsImV4cCI6MjEwNDM2Nzc1N30.Qyu657wldTT1XSKXFMdPyOKAY3OXzl5dJvjGfq0jg9A";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
