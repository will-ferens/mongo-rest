const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Order = require('../models/order')
const Product = require('../models/product')


router.get('/', (req, res, next) => {
    Order
        .find()
        .select('product quantity _id')
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                orders: docs.map(doc => {
                    return {
                        _id: doc._id,
                        product: doc.product,
                        quantity: doc.quantity,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/orders/' + doc._id
                        }
                    }
                }),
                
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
})

router.post('/', (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
           
            const order = new Order({
                _id: mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                product: req.body.productId
        })
            return order.save()
            .then(result => {
                console.log(result)
                res.status(201).json({
                    message: 'Order created',
                    createdOrder: {
                        _id: result._id,
                        product: result.product,
                        quantity: result.quantity
                    },
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/orders/' + result._id
                    }
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'product not found',
                    error: err
                })
            })
        })
        
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'balls',
        orderId: req.params.orderId
    })
})

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'balls2',
        orderId: req.params.orderId
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted',
        orderId: req.params.orderId
    })
})

module.exports = router