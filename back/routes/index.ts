import { Router } from "express"
import { mainRouter } from '@main/main.router'
import { userRouter } from '@users/user.router'
import { authRouter } from '@auth/auth.router'

const router = Router()

router.use('/', mainRouter)
router.use('/users', userRouter)
router.use('/auths', authRouter)

export default router