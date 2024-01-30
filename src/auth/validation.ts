import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

export const schemaRegisterUser = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
})

export type User = z.infer<typeof schemaRegisterUser>

export const schemaLoginUser = z.object({
    email: z.string().email(),
    password: z.string()
})

export type UserLogin = z.infer<typeof schemaLoginUser>

export const zRegisterValidator = zValidator('form', schemaRegisterUser)

export const zLoginValidator = zValidator('form', schemaLoginUser)