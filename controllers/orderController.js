const asyncHandler=require('express-async-handler')
const Order=require('../models/orderModel')

// @desc .... Create new Order
// @route .... POST api/orders
// @access .... Private
const addOrderItems=asyncHandler(async (req,res,next)=>{
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    }=req.body
    if(orderItems && orderItems.length===0){
        res.status(400)
        throw new Error("No order Items")
        return
    }
    else{
        const order=new Order({
            orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        user:req.user._id
        })
        const createdOrder=await order.save()
        res.status(200).json(createdOrder)
    }
})

// @desc .... Get Order By Id
// @route .... GET api/orders
// @access .... Private
const getOrderById=asyncHandler(async (req,res,next)=>{
    const order=await Order.findById(req.params.id).populate('user','name','email')
    if(order){
        res.json(order)
    }
    else{
        res.status(404)
        throw new Error("Order not Found")
    }
    }
)

exports.addOrderItems=addOrderItems
exports.getOrderById=getOrderById