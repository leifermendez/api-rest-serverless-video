import { type SupabaseClient } from "@supabase/supabase-js"
import { Post } from "./validation"

/**
 * Obtener los datos
 * @param payload 
 * @param supabase 
 * @returns 
 */
export const getPosts = async (supabase: SupabaseClient): Promise<Post[]> => {
    const { data } = await supabase.from('posts').select('*')
    return data as Post[]
}

export const addPost = async (supabase: SupabaseClient, user: Post): Promise<Post> => {
    const { data } = await supabase.from('posts')
        .insert(user)
        .select('*')
    return data as unknown as Post
}