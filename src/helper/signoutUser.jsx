import { supabase } from "./superbaseClient";

export default async function signOutUser() {
    const { error } = await supabase.auth.signOut()

}