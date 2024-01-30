import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

export const schemaPost = z.object({
    name: z.string(),
    description: z.string(),
    price: z.string()
})

export type Post = z.infer<typeof schemaPost>

export const zPostValidator = zValidator('form', schemaPost)