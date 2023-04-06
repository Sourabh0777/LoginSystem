import { supabase } from "./superbaseClient";



export default async function addData(values){
const { data, error } = await supabase.auth.admin.createUser({
    email: values.login_email,
    email_confirm: true,
    password: values.password,
    user_metadata: { name: values.user_name }
  })
}
