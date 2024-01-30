import { hash, compare } from 'bcryptjs'

/**
 * 
 * @param plainPwd 
 * @returns 
 */
export const hashPassword = async (plainPwd: string) => {
    return hash(plainPwd, 8)
}

/**
 * 
 * @param plainPwd 
 * @param hashedPwd 
 * @returns 
 */
export const comparePassword = async (plainPwd: string, hashedPwd: string) => {
    console.log(`[COMPARE]:`, plainPwd, hashedPwd)
    return compare(plainPwd, hashedPwd)
}