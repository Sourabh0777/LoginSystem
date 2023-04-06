import { supabase } from "./superbaseClient";

export default async function deletedata(id) {
  console.log("Delete is working");
  const { data, error } = await supabase.auth.admin.deleteUser(id)
  
  }
