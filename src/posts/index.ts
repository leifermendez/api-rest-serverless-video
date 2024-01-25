import { Hono } from 'hono'
import { supabaseMiddleware, getSupabase } from '../middleware/supabase'
import { User, addUser, getUsers } from './service'
import { zUserValidator } from './validation'

export type Bindings = {
    SUPABASE_KEY: string
    SUPABASE_URL: string
}

export const posts = new Hono<{ Bindings: Bindings }>().basePath('/posts')

posts.use('*', supabaseMiddleware)

posts.get('/', async (c) => {
    const supabase = getSupabase(c)
    const data = await getUsers(supabase)
    return c.json({
        data,
    })
})

posts.post('/', zUserValidator, async (c) => {
    const body = await c.req.parseBody<User>()
    const supabase = getSupabase(c)
    const data = await addUser(supabase, body)
    return c.json({
        data
    })
})