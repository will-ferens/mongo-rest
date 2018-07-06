const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'balls'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'balls'
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