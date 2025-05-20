import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://nuhilolgnpdrbwbvtisg.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51aGlsb2xnbnBkcmJ3YnZ0aXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNTMxMTcsImV4cCI6MjA2MjYyOTExN30.pygieSPto7MFRmrvtP46IgXl0S4MkqVw_UKM6wwtslA";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
