import express from 'express'
import { login, signUp } from 'controller/authController'

const authRouter = express.Router()

/**
 * @Method POST
 * @returns New Session Token or Error message (strings)
 */
authRouter.post('/login', login)

/**
 * @Method POST
 * @returns New User (Which will have JWT) or SQL error message
 */
authRouter.post('/signup', signUp)

export default authRouter
