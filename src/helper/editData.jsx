import { supabase } from "./superbaseClient";

async function editData() {
  const { error } = await supabase
    .from("countries")
    .update({ name: "Australia" })
    .eq("id", 1);
}
