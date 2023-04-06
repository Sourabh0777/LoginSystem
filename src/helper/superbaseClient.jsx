import { createClient } from "@supabase/supabase-js";




const supabaseUrl = "https://ohnoagcghxivaltvjcgn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obm9hZ2NnaHhpdmFsdHZqY2duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzMjM0MTMsImV4cCI6MTk5NTg5OTQxM30.jUvAKZC6ZJez4EugjmtjOG6WR1uc3sZDytPD_x37OKs";

const service_role_key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obm9hZ2NnaHhpdmFsdHZqY2duIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDMyMzQxMywiZXhwIjoxOTk1ODk5NDEzfQ.W_2Y3drchhqWXfCSf6bbAJbphhIUVCq-jNvMHS9s57E"

// export const supabase = createClient(supabaseUrl, supabaseKey);

export const supabase = createClient(supabaseUrl, service_role_key);