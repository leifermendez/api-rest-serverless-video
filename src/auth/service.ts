import { SupabaseClient } from "@supabase/supabase-js"
import { User } from "./validation"

/**
 * 
 * @param supabase 
 * @param user 
 * @returns 
 */
export const registerUser = async (supabase: SupabaseClient, user: User): Promise<User> => {
    const { data } = await supabase.from('users')
        .insert(user)
        .select('*')
    return data as unknown as User
}
/**
 * 
 * @param supabase 
 * @param email 
 * @returns 
 */
export const findUser = async (supabase: SupabaseClient, email: string): Promise<User> => {
    const { data } = await supabase.from('users')
        .select()
        .eq('email', email)
        .maybeSingle()

    return data as unknown as User
}