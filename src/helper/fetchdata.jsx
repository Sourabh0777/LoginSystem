import { supabase } from "./superbaseClient";

export default async function fetchData() {
  const { data, error } = await supabase.auth.admin.listUsers();
  const alluserData = await data?.users;
  if (alluserData && alluserData.length>0) {
    return alluserData;
  } else {
    error;
  }
}
