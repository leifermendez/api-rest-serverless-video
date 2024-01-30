import { Hono } from 'hono'
import { getSupabase, supabaseMiddleware } from '../middleware/supabase'
import { Bindings } from '../bindings'

export const storage = new Hono<{ Bindings: Bindings }>().basePath('/storage')

/**
 *[POST] http://localhost:PORT/api/storage/upload
 */
storage.post('/upload', supabaseMiddleware, async (c) => {
    const supabase = getSupabase(c)
    const body = await c.req.parseBody()
    const avatarFile = body['file'] as File;
    const { data, error } = await supabase
        .storage
        .from('users')
        .upload('public/avatar1.png', avatarFile, {
            cacheControl: '3600',
            upsert: false
        })
    return c.json({ data, error })

})