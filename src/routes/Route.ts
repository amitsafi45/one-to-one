import {Router} from 'express'
import Controller from '../controller/Controller'
import multer from 'multer'
const router:Router=Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname)
    }
  })
  const upload=multer({storage:storage})
router.post('/user',Controller.userController)
router.post('/profile', upload.single('avatar'),Controller.profileController)
router.get('/userprofile/:id',Controller.userProfile)
export default router
