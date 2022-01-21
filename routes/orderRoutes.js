const express=require('express')
const orderControllers=require('../controllers/orderController')
const router =express.Router()
const {protect}=require('../middlewares/authMiddlewares')

router.post('/',protect,orderControllers.addOrderItems)
router.get('/:id',protect,orderControllers.getOrderById)


module.exports=router