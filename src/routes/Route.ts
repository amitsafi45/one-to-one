import {Router} from 'express'
import Controller from '../controller/Controller'

const router:Router=Router()
router.post('/user',Controller.userController)
router.post('/profile',Controller.profileController)
router.get('/userprofile',Controller.userProfile)
export default router
