const express=require('express')
const productControllers=require('../controllers/productControllers')
const router =express.Router()


router.get('/',productControllers.getProducts)

router.get('/:id',productControllers.getProductById)

module.exports=router