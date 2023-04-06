import { supabase } from "./superbaseClient";

export default async function retrieveauser(userID) {


  const { data, error } = await supabase.auth.admin.getUserById(userID);
  // console.log("🚀 ~ file: retrieveauser.jsx:10 ~ retrieveauser ~ data:", data);
  if (data) {
    
    return data;
  } else {

    return "error";
  }
}
