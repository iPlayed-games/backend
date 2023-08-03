import express from 'express'
import { getAllUsers, getOneUserById } from '../controller/userController'

const userRouter = express.Router();


/** 
 * @Method GET
 * @returns All users
 */
userRouter.get("/", getAllUsers);


/** 
 * @Method GET
 * @returns one user find by Id
 */
userRouter.get("/:id", getOneUserById)


export default userRouter;
