const express=require('express')
const productControllers=require('../controllers/userControllers')
const router =express.Router()
const {protect}=require('../middlewares/authMiddlewares')

router.put('/register',protect,productControllers.updateUSerProfile)
router.post('/login',productControllers.authUser)
router.get('/profile',protect,productControllers.getUSerProfile)
router.post('/',productControllers.registerUser)

module.exports=router