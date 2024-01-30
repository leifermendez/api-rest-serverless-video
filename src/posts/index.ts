import { Hono } from 'hono'
import { supabaseMiddleware, getSupabase } from '../middleware/supabase'
import { Post, zPostValidator } from './validation'
import { Bindings } from '../bindings'
import { addPost, getPosts } from './service'
import { authMiddleware } from '../middleware/auth'

export const posts = new Hono<{ Bindings: Bindings }>().basePath('/posts')

posts.use('*', supabaseMiddleware, authMiddleware)

posts.get('/', async (c) => {
    const supabase = getSupabase(c)
    const data = await getPosts(supabase)
    return c.json({
        data,
    })
})

posts.post('/', zPostValidator, async (c) => {
    const body = await c.req.parseBody<Post>()
    const supabase = getSupabase(c)
    const data = await addPost(supabase, body)
    return c.json({
        data
    })
})