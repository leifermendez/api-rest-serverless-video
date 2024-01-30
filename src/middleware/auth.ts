import { MiddlewareHandler } from "hono"
import { jwt } from "hono/jwt"

/**
 * 
 * @param c 
 * @param next 
 * @returns 
 */
export const authMiddleware: MiddlewareHandler = async (c, next) => {
    const jwtMiddleware = jwt({
        secret: c.env.JWT_SECRET
    })
    return jwtMiddleware(c, next)
}