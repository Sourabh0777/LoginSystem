import { supabase } from "./superbaseClient";


export async function updateData(values){
    console.log("🚀 ~ file: updateData.jsx:5 ~ updateData ~ values:", values.name)
    
    const { data: user, error } = await supabase.auth.admin.updateUserById(
        values.id,
        { email: values.email},
        { user_metadata: { name: values.name } }
        )
}