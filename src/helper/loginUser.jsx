import { supabase } from "./superbaseClient";

export async function loginUser(values) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });
}
const userdata =  JSON.parse(localStorage.getItem("sb-ohnoagcghxivaltvjcgn-auth-token"));
export const userID =  userdata?.user?.id;
// const { data: { user } } = await supabase.auth.getUser()

// const logedInfo = await supabase.auth.getUser()
