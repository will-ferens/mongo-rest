const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get requests to products'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'post requests to products'
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId

    if (id === 'special'){
        res.status(200).json({
            message: 'poop'
        })
    } else {
        res.status(200).json({
            message: 'id'
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
            message: 'updated'
    })
})

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
            message: 'deleted'
    })
})

module.exports = router